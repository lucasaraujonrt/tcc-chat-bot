import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import { color, font } from '@mobile/config/theme.json';
import * as Dimension from '@mobile/services/dimensionsService';

export const Container = styled.View`
  flex: 1;
  background-color: ${color.primary};
  flex-direction: column;
`;

export const WrapperForm = styled(KeyboardAwareScrollView)`
  width: ${Dimension.widthScale(1)}px;
  height: ${Dimension.heightScale(1)}px;
  margin-top: ${Dimension.heightScale(0.1)}px;
  background-color: ${color.cream};
  border-top-left-radius: ${Dimension.widthScale(0.1)}px;
  border-top-right-radius: ${Dimension.widthScale(0.1)}px;
`;

export const WrapperTitle = styled.View`
  align-self: center;
  margin-top: ${Dimension.heightScale(0.03)}px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${font.regular};
  width: ${Dimension.widthScale(0.8)}px;
  color: ${color.black};
  font-size: ${Dimension.fontScale(14)}px;
`;

export const WrapperInput = styled.View`
  align-self: center;
  margin-top: ${Dimension.heightScale(0.1)}px;
  max-width: 90%;
`;

export const WrapperButton = styled.View`
  align-self: center;
  margin-top: ${Dimension.heightScale(0.03)}px;
`;
