import styled from 'styled-components/native';
import { color } from '@mobile/config/theme.json';
import * as Dimensions from '@mobile/services/dimensionsService';

export const Container = styled.View`
  flex: 1;
  background-color: ${color.primary};
`;

export const WhiteBackground = styled.View`
  background-color: ${color.cream};
  margin-top: ${Dimensions.heightScale(0.05)}px;
  width: ${Dimensions.widthScale(1)}px;
  height: ${Dimensions.heightScale(0.9)}px;
  border-top-left-radius: ${Dimensions.widthScale(0.06)}px;
  border-top-right-radius: ${Dimensions.widthScale(0.06)}px;
  align-items: center;
`;