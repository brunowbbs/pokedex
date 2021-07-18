import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
`;

export const Sprit = styled.Image`
  width: ${width / 4.2}px;
  height: ${width / 4.2}px;
`;