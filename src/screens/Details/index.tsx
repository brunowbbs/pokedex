import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

import { IndicatorBar, Sprites } from '../../components';
import { generatedColor } from '../../utils';

import {
  Container,
  GoBackButton,
  IconButton,
  Title,
  SubTitle,
  TextWhite,
  TextBlack,
  Header,
  Content,
  ContentProfile,
  SubcontentProfile,
  TitleProfile,
  TextMove,
  Image,
  SectionColumn,
  SectionRow
} from './styles';

export function Details() {

  const route = useRoute();
  const { item }: any = route.params;
  const navigation = useNavigation();

  const scrollPosition = useRef(new Animated.Value(0)).current;

  const imageHeight = scrollPosition.interpolate({
    inputRange: [0, 150],
    outputRange: [200, 0],
    extrapolateRight: 'clamp',
  });

  return (
    <Container>
      <GoBackButton onPress={() => navigation.goBack()}>
        <IconButton />
      </GoBackButton>
      <Header color={generatedColor(item.types[0].type.name)}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            style={{
              height: imageHeight,
              width: imageHeight,
              borderRadius: imageHeight,
            }}
            source={{ uri: item.sprites.other['official-artwork'].front_default }}
          />
        </SharedElement>

        <SharedElement id={`item.${item.id}.name`}>
          <Title>{item.name}</Title>
        </SharedElement>

        <SectionRow>
          {
            item.types.map((item: any) => <TextWhite key={item.type.name} >{item.type.name}</TextWhite>)
          }
        </SectionRow>
      </Header>
      <Content
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollPosition } } }],
          { useNativeDriver: false },
        )}
        contentInsetAdjustmentBehavior="automatic"
      >
        <ContentProfile>
          <SubcontentProfile>
            <TextBlack>Weight</TextBlack>
            <SubTitle>{item.weight}</SubTitle>
          </SubcontentProfile>
          <SubcontentProfile>
            <TextBlack>Height</TextBlack>
            <SubTitle>{item.height}</SubTitle>
          </SubcontentProfile>
        </ContentProfile>

        <SectionColumn>
          <SubTitle>Base stats</SubTitle>
          {
            item.stats.map((item: any) => <IndicatorBar key={item.stat.name} name={item.stat.name} stat={item.base_stat} />)
          }
        </SectionColumn>


        <TitleProfile>Moves</TitleProfile>
        <SectionRow>
          {
            item.moves.map((item: any) => <TextMove key={item.move.name} >{item.move.name}</TextMove>)
          }
        </SectionRow>

        <TitleProfile>Abilities</TitleProfile>
        <SectionRow>
          {
            item.abilities.map((item: any) => <TextMove key={item.ability.name} >{item.ability.name}</TextMove>)
          }
        </SectionRow>

        <TitleProfile>Sprites</TitleProfile>
        <SectionRow>
          <Sprites item={item.sprites} />
        </SectionRow>

      </Content>
    </Container >
  )
}