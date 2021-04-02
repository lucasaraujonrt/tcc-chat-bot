import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Window from '../../services/dimensionsService';


interface IProps {
  padding?: number,
}

export const KeyboardAvoidingContainer = styled(KeyboardAwareScrollView)`
  padding: ${(props: IProps) => props.padding ? `${Window.widthScale(props.padding)}` : 0}px;
`;