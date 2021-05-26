import styled from 'styled-components/native';
import * as Window from '@mobile/services/dimensionsService';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { color, font } from '@mobile/config/theme.json';
import Arrow from '@mobile/assets/svg/header/ic_arrow_back.svg';

export const Container = styled.View`
  flex: 1;
  background-color: ${color.primary};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  padding-vertical: ${Window.heightScale(0.035)}px;
  align-items: center;
`;

export const IconArrow = styled(Arrow)``;

export const WrapperGoBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  justify-content: center;
  margin-left: ${Window.widthScale(0.04)}px;
`;

export const WrapperTony = styled.View`
  margin-left: ${Window.widthScale(0.1)}px;
`;

export const TonyImage = styled.Image.attrs({
  resizeMode: 'contain',
})``;

export const WrapperTonyInfo = styled.View`
  flex-direction: column;
  margin-left: ${Window.widthScale(0.1)}px;
`;

export const TonyName = styled.Text`
  font-family: ${font.bold};
  color: ${color.cream};
  font-size: ${Window.fontScale(16)}px;
`;

export const TonyStatus = styled.Text`
  font-family: ${font.regular};
  color: ${color.cream};
  font-size: ${Window.fontScale(10)}px;
`;

export const WrapperHelp = styled.View`
  margin-left: ${Window.widthScale(0.3)}px;
`;

export const IconHelp = styled(MaterialIcons).attrs({
  name: 'info-outline',
  color: color.cream,
  size: 32,
})``;

export const WrapperChat = styled.ScrollView`
  width: 100%;
`;

export const PageContainerView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  height: ${`${Window.winHeight * 0.9 - 1}px`};
  width: 100%;
  background-color: ${color.cream};
  border-top-left-radius: ${Window.widthScale(0.07)}px;
  border-top-right-radius: ${Window.widthScale(0.07)}px;
`;

export const WrapperDateDivisor = styled.View`
  align-self: center;
`;

export const DateDivisor = styled.Text`
  font-family: ${font.regular};
  font-size: ${`${Window.winHeight * 0.02}px`};
  line-height: ${`${Window.winHeight * 0.025}px`};
  color: ${color.baby_gray};
  text-align: center;
  margin: 1% 5%;
`;
