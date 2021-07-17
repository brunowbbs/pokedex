import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { useTheme } from 'styled-components';
import { generatedColor } from '../../utils';
import { Container, PokemonName, PokemonImage, PokemonType, Circle } from './styles';

import { useNavigation } from '@react-navigation/native';

export type ItemPokemonProps = {
  name: string;
  type: string;
  image: string;
}

interface Props {
  item: ItemPokemonProps
}

export function PokemonCard({ item }: any) {

  const navigation = useNavigation();


  return (


    <Container color={generatedColor(item.data.types[0].type.name)} onPress={() => navigation.navigate('Details', { item: item.data })}>
      <SharedElement id={`item.${item.data.id}.photo`}>
        <PokemonImage resizeMode="contain" source={{ uri: item.data.sprites.other['official-artwork'].front_default }} />
      </SharedElement>
      <SharedElement id={`item.${item.data.name}.name`}>
        <PokemonName>{item.data.name}</PokemonName>
      </SharedElement>
      <PokemonType>{item.data.types[0].type.name}</PokemonType>
    </Container>


  )
}