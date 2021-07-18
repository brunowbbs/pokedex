import React from 'react';
import { useEffect } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { useTheme } from 'styled-components/native'

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

  const barWidth = React.useRef(new Animated.Value(0)).current;

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
      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 16 }}>{name}</Text>
        <Text style={{ fontSize: 16 }}>{stat}</Text>
      </View>

      <Animated.View
        style={{
          maxWidth: width,
          marginTop: 10,
          height: 10,
          width: barWidth,
          borderRadius: 7.5,
          backgroundColor: '#cacaca',
        }}
      />

    </>
  )
}