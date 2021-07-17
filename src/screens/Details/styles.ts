import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface ContentProps {
  color: string;
}

export const Container = styled.View``;

export const GoBackButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  left: 10px;
  top:${getStatusBarHeight()}px;
  z-index: 99;
`;

export const IconButton = styled(Ionicons)`
`;

export const Content = styled.View<ContentProps>`
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
  background: rgba(255,255,255,0.1);
  border-radius: 50px;
  position: absolute;
  top:15px
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
`;

