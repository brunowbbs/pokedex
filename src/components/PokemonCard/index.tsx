import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { generatedColor } from '../../utils';
import { Container, PokemonName, PokemonImage, PokemonType, ContainerTypes } from './styles';

import { useNavigation } from '@react-navigation/native';

export type ItemPokemonProps = {
  name: string;
  type: string;
  image: string;
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

      <ContainerTypes >
        {
          item.data.types.map((item: any) => <PokemonType key={item.type.name} >{item.type.name}</PokemonType>)
        }
      </ContainerTypes>


    </Container>


  )
}