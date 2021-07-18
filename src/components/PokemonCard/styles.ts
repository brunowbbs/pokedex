import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface ContainerProps {
  color: string;
}

export const Container = styled(RectButton) <ContainerProps>`
  justify-content: center;
  align-items: center;
  margin: 10px;
  flex: 1;
  border-radius: 8px;
  padding: 10px;
  background: ${(props) => props.color};
`;

export const PokemonName = styled.Text`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: #fff;
  margin-top: 10px;
`;

export const PokemonImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ContainerTypes = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.Text`
  color: #fff;
  font-size: 12px;
  padding: 0 5px;
`;
