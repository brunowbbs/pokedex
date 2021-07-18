import React, { useRef, useEffect } from 'react';
import { Dimensions, Animated } from 'react-native';
import { Container, Text, AnimatedView } from './styles';

interface PropsIndicatorBar {
  name: string;
  stat: string;
}

const { width } = Dimensions.get('screen');


function getWidthBar(stat: number) {
  stat > 100 ? stat = 100 : stat;
  return (stat * width * 0.95 / 100);
}


export function IndicatorBar({ name, stat }: PropsIndicatorBar) {

  const barWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(barWidth, {
      toValue: getWidthBar(Number(stat)),
      bounciness: 10,
      speed: 0.5,
      useNativeDriver: false
    }).start();
  }, [])


  return (
    <>
      <Container>
        <Text>{name}</Text>
        <Text>{stat}</Text>
      </Container>

      <AnimatedView
        style={{
          maxWidth: width,
          width: barWidth
        }}
      />

    </>
  )
}