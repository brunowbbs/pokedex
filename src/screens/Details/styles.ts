import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { BaseButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Animated } from "react-native";
import { normalize } from '../../utils'

interface HeaderProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const GoBackButton = styled(BaseButton)`
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: ${normalize(25)}px;
  left: 10px;
  top: ${getStatusBarHeight() + 15}px;
  z-index: 99;
`;

export const IconButton = styled(Ionicons).attrs({
  name: 'ios-arrow-back-outline',
  color: '#FFF',
  size: 35
})``;

export const Header = styled(Animated.View) <HeaderProps>`
  width: 100%;
  background: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  padding: ${normalize(20)}px;
  padding-top: ${getStatusBarHeight()}px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

`;

export const Image = styled(Animated.Image)``;

export const Title = styled.Text`
  font-size: ${normalize(24)}px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: #fff;
  margin-top: ${normalize(10)}px;
`;

export const SubTitle = styled.Text`
  font-size: ${normalize(20)}px;;
  font-family: ${(props) => props.theme.fonts.medium};
  color: #2a2a2a;
  margin-top: ${normalize(10)}px;
`;

export const TextWhite = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
  font-size: ${normalize(15)}px;
  padding: 0 ${normalize(5)}px;
`;

export const TextBlack = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #2a2a2a;
  font-size: ${normalize(15)}px;
  padding: 0 ${normalize(5)}px;
`;

export const Content = styled(Animated.ScrollView)`
  padding: ${normalize(20)}px ${normalize(10)}px;
  flex: 1;
`;

export const ContentProfile = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const SubcontentProfile = styled.View`
  align-items: center;
`;

export const TitleProfile = styled.Text`
  font-size: ${normalize(18)}px;
  font-family: ${(props) => props.theme.fonts.medium};
  margin: ${normalize(20)}px 0 ${normalize(10)}px 0;
`;

export const Border = styled.View`
  width: 100%;
  height: ${normalize(0.85)}px;
  background: #3a3a3a;
  margin-top: ${normalize(5)}px;
  margin-bottom: ${normalize(-5)}px;
`;

export const TextProfile = styled.Text`
  font-size: ${normalize(14)}px;
  margin-top: ${normalize(10)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: #3a3a3a;
`;

export const SectionColumn = styled.View`
  margin-top: ${normalize(20)}px;
`;

export const SectionRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TextMove = styled.Text`
  height: ${normalize(22)}px;
  font-size: ${normalize(12)}px;
  padding:${normalize(2)}px ${normalize(7)}px;
  margin:${normalize(2)}px;
  border-width: ${normalize(1)}px;
  border-color: #000;
  border-radius: ${normalize(10)}px;
`;