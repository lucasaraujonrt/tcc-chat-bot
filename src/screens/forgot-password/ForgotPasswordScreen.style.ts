import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import { color } from '../../config/theme.json';
import * as Dimension from '../../services/dimensionsService';

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