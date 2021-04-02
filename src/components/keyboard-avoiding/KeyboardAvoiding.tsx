import React from 'react';
import * as S from './KeyboardAvoiding.style';

interface IKeyboardAvoiding {
  padding?: number,
  children?: JSX.Element | JSX.Element[];
}

const KeyboardAvoiding = ({
  padding,
  children
}: IKeyboardAvoiding) => {
  return (
    <S.KeyboardAvoidingContainer padding={padding}>
      {children}
    </S.KeyboardAvoidingContainer>
  )
}

export default KeyboardAvoiding;