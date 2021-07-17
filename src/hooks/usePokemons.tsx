import React from 'react';
import { ReactNode, useContext } from 'react';
import { createContext, useEffect, useState } from 'react';
import { DataListPokemonProps } from '../screens/Home';
import { fechPokemons } from '../services';

interface PokemonsProviderProps {
  children: ReactNode;
}

interface PokemonsContextData {
  pokemons: DataListPokemonProps[];
  handlePage: (page: number) => void;
  page: number;
  isLoading: boolean;
}

const PokemonsContext = createContext<PokemonsContextData>(
  {} as PokemonsContextData
);

export function PokemonsProvider({ children }: PokemonsProviderProps) {
  const [pokemons, setPokemons] = useState<any>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePage = (page: number) => {
    setPage(page);
  }

  const finishLoading = () => {
    setIsLoading(false);
  }

  useEffect(() => {

    async function getPokemons() {
      const res = await fechPokemons(page, finishLoading);
      setPokemons(pokemons.concat(res));
    }

    getPokemons();

  }, [page])

  return (
    <PokemonsContext.Provider value={{ pokemons, handlePage, page, isLoading }}>
      {children}
    </PokemonsContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(PokemonsContext);
  return context;
}
