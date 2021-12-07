import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import { color, font } from '@mobile/config/theme.json';
import * as Dimension from '@mobile/services/dimensionsService';

interface IProps {
  fontMe?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${color.primary};
  flex-direction: column;
`;

export const SubContainer = styled(KeyboardAwareScrollView)`
  width: ${Dimension.widthScale(1)}px;
  height: ${Dimension.heightScale(1)}px;
  margin-top: ${Dimension.heightScale(0.1)}px;
  background-color: ${color.cream};
  border-top-left-radius: ${Dimension.widthScale(0.1)}px;
  border-top-right-radius: ${Dimension.widthScale(0.1)}px;
  padding-horizontal: ${Dimension.widthScale(0.1)}px;
`;

export const TextMe = styled.Text`
  color: ${({ fontMe }: IProps) => (fontMe ? color.black : color.dark_gray)};
  font-family: ${({ fontMe }: IProps) => (fontMe ? font.medium : font.regular)};
  line-height: ${Dimension.heightScale(0.05)}px;
  font-size: ${({ fontMe }: IProps) =>
    fontMe ? Dimension.fontScale(18) : Dimension.fontScale(16)}px;
  text-decoration: ${({ fontMe }: IProps) => (fontMe ? 'none' : 'underline')};
`;
