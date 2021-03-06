import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { color, font } from '@mobile/config/theme.json';
import * as Window from '@mobile/services/dimensionsService';

interface IProps {
  bold?: boolean;
  link?: boolean;
}

export const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
  background-color: ${color.primary};
  flex-direction: column;
`;

export const WrapperContainer = styled.View`
  justify-content: flex-end;
`;

export const WrapperLogo = styled.View`
  width: ${Window.widthScale(1)}px;
  height: ${Window.heightScale(0.3)}px;
  justify-content: center;
  align-items: center;
`;

export const TextLogo = styled.Text`
  font-family: ${font.medium};
  font-size: ${(props: IProps) =>
    props.bold ? `${Window.fontScale(22)}px` : `${Window.fontScale(14)}px`};
  text-decoration: ${(props: IProps) => (props.link ? 'underline' : 'none')};
  text-align: center;
  font-weight: ${(props: IProps) => (props.bold ? 800 : 400)};
  padding-vertical: ${(props: IProps) =>
    props.bold
      ? `${Window.heightScale(0.05)}px`
      : `${Window.heightScale(0.025)}px`};
  color: ${(props: IProps) => (props.link ? color.dark_gray : color.black)};
`;

export const SubContainer = styled.View`
  width: ${Window.widthScale(1)}px;
  height: ${Window.heightScale(0.7)}px;
  background-color: ${color.cream};
  border-top-left-radius: ${Window.widthScale(0.1)}px;
  border-top-right-radius: ${Window.widthScale(0.1)}px;
`;

export const WrapperForm = styled.View`
  width: ${Window.widthScale(0.8)}px;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${Window.heightScale(0.02)}px;
`;

export const WrapperLink = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;
