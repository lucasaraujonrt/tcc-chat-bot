import styled from 'styled-components/native';
import { color, font } from '@mobile/config/theme.json';
import * as Dimensions from '@mobile/services/dimensionsService';

export const Container = styled.View.attrs({
  collapsable: false,
})`
  flex-direction: column;
`;

export const WrapperTitle = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: ${Dimensions.heightScale(0.1)}px;
`;

export const Title = styled.Text`
  font-size: ${Dimensions.fontScale(24)}px;
  font-family: ${font.medium};
  color: ${color.black};
`;

export const WrapperIcon = styled.View`
  margin-top: ${Dimensions.heightScale(0.05)}px;
  height: ${Dimensions.heightScale(0.45)}px;
  justify-content: center;
  align-items: center;
`;

export const WrapperDescription = styled.View`
  max-width: ${Dimensions.widthScale(0.9)}px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Description = styled.Text`
  font-size: ${Dimensions.fontScale(14)}px;
  font-family: ${font.medium};
  color: ${color.black};
  text-align: center;
`;

export const WrapperIndicator = styled.View`
  margin-top: ${Dimensions.heightScale(0.05)}px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

