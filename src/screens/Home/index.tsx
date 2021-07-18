import React from 'react';
import { ActivityIndicator } from 'react-native';
import { usePokemons } from '../../hooks/usePokemons';

import { PokemonCard, ItemPokemonProps } from '../../components';

import {
  Container,
  Title,
  PokemonList
} from './styles'

export interface DataListPokemonProps extends ItemPokemonProps {
  id: string;
}

export function Home() {
  const { pokemons, handlePage, page, isLoading } = usePokemons();

  return (
    <Container>
      <Title>Pokedéx</Title>
      <PokemonList
        data={pokemons}
        keyExtractor={(item) => item.data.id.toString()}
        renderItem={({ item }: any) => <PokemonCard item={item} />}
        ListFooterComponent={isLoading ? <ActivityIndicator size="large" color="#a0a0a0" /> : undefined}
        onEndReached={() => handlePage(page + 20)}
      />
    </Container>
  )
}