import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Container, GoBackButton, IconButton, PokemonName, PokemonType, Header, Content, ContentProfile, SubcontentProfile, TitleProfile, TextProfile, Border, BaseState, ContainerTypes, TextMove, ImageSprite } from './styles';
import { useNavigation } from '@react-navigation/native';
import { generatedColor } from '../../utils';

import { IndicatorBar } from '../../components';
import { Sprites } from '../../components/Sprites';


function generateSprites(sprites: any) {

  Object.keys(sprites).forEach((key) => {
    console.log(key); //column01...
    console.log(sprites[key]); //Coluna 01...
  });
}


export function Details() {

  const route = useRoute();
  const { item }: any = route.params;
  const navigation = useNavigation();

  return (
    <Container>
      <GoBackButton onPress={() => navigation.goBack()}>
        <IconButton name="ios-arrow-back-outline" size={32} color="#000" />
      </GoBackButton>
      <Header color={generatedColor(item.types[0].type.name)}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image source={{ uri: item.sprites.other['official-artwork'].front_default }} style={{ width: 250, height: 250 }} />
        </SharedElement>
        <SharedElement id={`item.${item.id}.name`}>
          <PokemonName>{item.name}</PokemonName>
        </SharedElement>
        <ContainerTypes>
          {
            item.types.map((item: any) => <PokemonType key={item.type.name} >{item.type.name}</PokemonType>)
          }
        </ContainerTypes>
      </Header>
      <Content>
        <ContentProfile>
          <SubcontentProfile>
            <TitleProfile>Weight</TitleProfile>
            <Border />
            <TextProfile>{item.weight}</TextProfile>
          </SubcontentProfile>
          <SubcontentProfile>
            <TitleProfile>Height</TitleProfile>
            <Border />
            <TextProfile>{item.height}</TextProfile>
          </SubcontentProfile>
        </ContentProfile>

        <BaseState>
          <TitleProfile>Base stats</TitleProfile>
          {
            item.stats.map((item: any) => <IndicatorBar key={item.stat.name} name={item.stat.name} stat={item.base_stat} />)
          }
        </BaseState>

        <TitleProfile>Moves</TitleProfile>
        <ContainerTypes>
          {
            item.moves.map((item: any) => <TextMove key={item.move.name} >{item.move.name}</TextMove>)
          }
        </ContainerTypes>

        <TitleProfile>Abilities</TitleProfile>
        <ContainerTypes>
          {
            item.abilities.map((item: any) => <TextMove key={item.ability.name} >{item.ability.name}</TextMove>)
          }
        </ContainerTypes>

        <TitleProfile>Sprites</TitleProfile>
        <ContainerTypes>
          <Sprites item={item.sprites} />
        </ContainerTypes>

      </Content>
    </Container>
  )
}