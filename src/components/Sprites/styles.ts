import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { normalize } from '../../utils';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  padding-bottom: ${normalize(50)}px;
  justify-content: space-between;
`;

export const Sprit = styled.Image`
  width: ${width / 4.2}px;
  height: ${width / 4.2}px;

`;