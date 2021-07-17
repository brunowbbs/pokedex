import React, { useState } from 'react';
import { usePokemons } from '../../hooks/usePokemons';

import { PokemonCard, ItemPokemonProps } from '../../components/PokemonCard';

import {
  Container,
  Title,
  PokemonList
} from './styles'
import { ActivityIndicator } from 'react-native';

export interface DataListPokemonProps extends ItemPokemonProps {
  id: string;
}

export function Home() {
  const { pokemons, handlePage, page, isLoading } = usePokemons();

  return (
    <Container>
      <Title>Pokedéx</Title>
      <PokemonList
        numColumns={2}
        showVerticalScrollIndicator={false}
        data={pokemons}
        keyExtractor={(item) => item.data.id.toString()}
        renderItem={({ item }: any) => <PokemonCard item={item} />}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoading && <ActivityIndicator size="large" />}
        onEndReached={() => handlePage(page + 20)}
      />
    </Container>
  )
}