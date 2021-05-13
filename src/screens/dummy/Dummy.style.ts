import styled from 'styled-components/native';
import * as Dimensions from '@mobile/services/dimensionsService'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WrapperInputs = styled.View`
  flex-direction: column;
  width: 90%;
`;

export const WrapperButton = styled.View`
  margin-top: ${Dimensions.heightScale(0.05)}px;
  width: 80%;
  align-self: center;
`;
