import React from 'react';
import { useTheme } from 'styled-components';
import { generatedColor } from '../../utils';
import { Container, PokemonName, PokemonImage, PokemonType, Circle } from './styles';

export type ItemPokemonProps = {
  name: string;
  type: string;
  image: string;
}

interface Props {
  item: ItemPokemonProps
}

export function PokemonCard({ item }: any) {

  const { colors } = useTheme();

  return (
    <Container color={generatedColor(item.data.types[0].type.name)}>
      <PokemonImage resizeMode="contain" source={{ uri: item.data.sprites.other['official-artwork'].front_default }} />
      <PokemonName>{item.data.name}</PokemonName>
      <PokemonType>{item.data.types[0].type.name}</PokemonType>
      <Circle />
    </Container>
  )
}