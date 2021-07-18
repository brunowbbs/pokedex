import { Animated } from "react-native";
import styled from "styled-components/native";
import { normalize } from '../../utils';

export const Container = styled.View`
  flex-direction: row;
  margin-top: ${normalize(10)}px;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: ${normalize(16)}px;
`;

export const AnimatedView = styled(Animated.View)`
  margin-top: ${normalize(10)}px;
  height: ${normalize(10)}px;
  border-radius: ${normalize(5)}px;
  background-color: #cacaca;
`;
