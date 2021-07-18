import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-status-bar-height";

interface HeaderProps {
  color: string;
}

export const Container = styled.ScrollView``;

export const GoBackButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  left: 10px;
  top: ${getStatusBarHeight()}px;
  z-index: 99;
`;

export const IconButton = styled(Ionicons)``;

export const Header = styled.View<HeaderProps>`
  width: 100%;
  background: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 20px;
  padding-top: ${getStatusBarHeight() + 50}px;
`;

export const Circle = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  position: absolute;
  top: 15px;
`;

export const PokemonName = styled.Text`
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: #fff;
  margin-top: 10px;
`;

export const PokemonType = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
   color: #fff;
  font-size: 15px;
  padding: 0 5px;
`;

export const Content = styled.View`
  padding: 20px 10px ;
`;

export const ContentProfile = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const SubcontentProfile = styled.View`
  align-items: center;
`;

export const TitleProfile = styled.Text`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.medium};
  margin: 20px 0 10px 0;
`;

export const Border = styled.View`
  width: 100%;
  height: 0.85px;
  background: #3a3a3a;
  margin-top: 5px;
  margin-bottom: -5px;
`;

export const TextProfile = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: #3a3a3a;
`;

export const BaseState = styled.View`
  margin-top:20px;
`;

export const ContainerTypes = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TextMove = styled.Text`
  padding: 2px 5px; margin: 5px;
  border-width: 1px;
  border-color: #000;
  border-radius: 10px;
`;

export const ImageSprite = styled.Image`
  width: 100px;
  height: 100px;
`;