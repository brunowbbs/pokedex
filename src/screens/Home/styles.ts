import styled from "styled-components/native";
import { ActivityIndicator, FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { normalize } from '../../utils'

import { DataListPokemonProps } from ".";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${getStatusBarHeight() + normalize(20)}px;
`;

export const Title = styled.Text`
  padding: 0 ${normalize(20)}px;
  font-size: ${normalize(24)}px;
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const PokemonList = styled(
  FlatList as new () => FlatList<DataListPokemonProps>
).attrs({
  numColumns: 2,
  onEndReachedThreshold: 0.5
})``;


export const LoadingData = styled(
  ActivityIndicator as new () => ActivityIndicator
).attrs({
  size: 'small',
  color: '#fafafa'
})``;
