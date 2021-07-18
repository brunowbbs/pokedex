import styled from "styled-components/native";
import { BaseButton } from "react-native-gesture-handler";
import { normalize } from '../../utils';

interface ContainerProps {
  color: string;
}

export const Container = styled(BaseButton) <ContainerProps>`
  justify-content: center;
  align-items: center;
  margin: ${normalize(10)}px;
  flex: 1;
  border-radius: ${normalize(8)}px;
  padding: ${normalize(10)}px;
  background: ${(props) => props.color};
`;

export const PokemonName = styled.Text`
  font-size: ${normalize(18)}px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: #fff;
  margin-top: ${normalize(10)}px;
`;

export const PokemonImage = styled.Image`
  width: ${normalize(100)}px;
  height: ${normalize(100)}px;
`;

export const ContainerTypes = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.Text`
  color: #fff;
  font-size: 12px;
  padding: 0 5px;
`;
