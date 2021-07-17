import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { DataListPokemonProps } from '.';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
padding:0 20px;
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const PokemonList = styled(
  FlatList as new () => FlatList<DataListPokemonProps>
).attrs({})``;