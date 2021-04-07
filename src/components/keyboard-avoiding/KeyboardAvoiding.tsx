import React from 'react';
import * as S from './KeyboardAvoiding.style';

interface IKeyboardAvoiding {
  padding?: number,
  children?: JSX.Element | JSX.Element[]
  background?: string,
}

const KeyboardAvoiding = ({
  padding,
  children,
  background,
}: IKeyboardAvoiding) => {
  return (
    <S.KeyboardAvoidingContainer background={background} padding={padding}>
      {children}
    </S.KeyboardAvoidingContainer>
  )
}

export default KeyboardAvoiding;