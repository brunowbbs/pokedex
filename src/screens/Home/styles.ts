import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';


import { DataListPokemonProps } from '.';

export const Container = styled.View`
  flex: 1;
padding-top: ${getStatusBarHeight() + 20}px;
`;

export const Title = styled.Text`
padding:0 20px;
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const PokemonList = styled(
  FlatList as new () => FlatList<DataListPokemonProps>
).attrs({})``;