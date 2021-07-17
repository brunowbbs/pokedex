import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { GoBackButton, IconButton, PokemonName, PokemonType, Circle, Content, Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { generatedColor } from '../../utils';

export function Details() {

  const route = useRoute();
  const { item }: any = route.params;
  const navigation = useNavigation();

  return (
    <Container>
      <GoBackButton onPress={() => navigation.goBack()}>
        <IconButton name="ios-arrow-back-outline" size={32} color="#000" />
      </GoBackButton>
      <Content color={generatedColor(item.types[0].type.name)}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image source={{ uri: item.sprites.other['official-artwork'].front_default }} style={{ width: 250, height: 250 }} />
        </SharedElement>
        <SharedElement id={`item.${item.id}.name`}>
          <PokemonName>{item.name}</PokemonName>
        </SharedElement>
        <PokemonType>{item.types[0].type.name}</PokemonType>
      </Content>
    </Container>
  )
}