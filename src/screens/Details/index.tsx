import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Container, GoBackButton, IconButton, PokemonName, PokemonType, Header, Content, ContentProfile, SubcontentProfile, TitleProfile, TextProfile, Border, BaseState } from './styles';
import { useNavigation } from '@react-navigation/native';
import { generatedColor } from '../../utils';

import { IndicatorBar } from '../../components';

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
        <PokemonType>{item.types[0].type.name}</PokemonType>
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
          <IndicatorBar name={item.stats[0].stat.name} stat={item.stats[0].base_stat} color={generatedColor(item.types[0].type.name)} />
          <IndicatorBar name={item.stats[1].stat.name} stat={item.stats[1].base_stat} color={generatedColor(item.types[0].type.name)} />
          <IndicatorBar name={item.stats[2].stat.name} stat={item.stats[2].base_stat} color={generatedColor(item.types[0].type.name)} />
          <IndicatorBar name={item.stats[3].stat.name} stat={item.stats[3].base_stat} color={generatedColor(item.types[0].type.name)} />
          <IndicatorBar name={item.stats[4].stat.name} stat={item.stats[4].base_stat} color={generatedColor(item.types[0].type.name)} />
          <IndicatorBar name={item.stats[5].stat.name} stat={item.stats[5].base_stat} color={generatedColor(item.types[0].type.name)} />
        </BaseState>
      </Content>
    </Container>
  )
}