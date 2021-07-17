import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  color: string;
}

export const Container = styled(RectButton) <ContainerProps>`
  justify-content: center;
  align-items: center;
  margin: 10px; 
  flex:1;
  border-radius: 8px;
  padding: 10px;
  background: ${(props) => props.color};
`;

export const Circle = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255,255,255,0.1);
  border-radius: 50px;
  position: absolute;
  top:15px
`;

export const PokemonName = styled.Text`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: #fff;
  margin-top: 10px;
`;

export const PokemonImage = styled.Image`
  width: 120px;
  height: 120px;
  
`;

export const PokemonType = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
  font-size: 12px;
`;