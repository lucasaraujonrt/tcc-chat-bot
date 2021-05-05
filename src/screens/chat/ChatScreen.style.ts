import styled from 'styled-components/native';
import * as Window from '@mobile/services/dimensionsService';
import { color, font } from '@mobile/config/theme.json';

export const Container = styled.View`
  flex: 1;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: color.dark_gray,
})`
  background-color: transparent;
  font-family: ${font.regular};
  padding: 3%;
  width: ${Window.widthScale(0.9)}px;
  color: ${color.dark_gray};
  max-width: ${Window.widthScale(0.55)}px;
`;

export const InputStyle = {
  placeholderTextColor: color.primary,
  backgroundColor: color.little_coral,
  fontFamily: font.regular,
  color: color.dark_gray,
  borderRadius: 50,
}