import Arrow from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import { color, font } from '@mobile/config/theme.json';
import * as Dimensions from '@mobile/services/dimensionsService';

export const Container = styled.View`
  background-color: ${color.cream};
`;

export const WrapperTitle = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

export const Title = styled.Text`
  font-size: ${Dimensions.fontScale(24)}px;
  font-family: ${font.medium};
  color: ${color.black};
`;

export const WrapperButtons = styled.View`
  width: ${Dimensions.widthScale(0.8)}px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: auto;
  top: ${Dimensions.heightScale(0.8)}px;
`;

export const WrapperLink = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Link = styled.Text`
  font-size: ${Dimensions.fontScale(14)}px;
  font-family: ${font.medium};
  color: ${color.dark_gray};
  text-decoration: underline;
`;

export const ButtonBall = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  border-radius: ${Dimensions.heightScale(0.1)}px;
  padding: 5%;
  background-color: ${color.second};
  justify-content: center;
  align-items: center;
  elevation: 5;
`;

export const IconArrow = styled(Arrow).attrs({
  name: 'arrowright',
  size: 24,
  color: color.cream,
})``;

export const TextStart = styled.Text`
  font-size: ${Dimensions.fontScale(16)}px;
  font-family: ${font.medium};
  color: ${color.cream};
`;