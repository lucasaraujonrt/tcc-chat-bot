import React from 'react';
import * as S from './Button.style';

interface IButton {
  width?: number,
  title: string,
  onPress: () => void,
  disabled?: boolean,
}


const Button = ({
  title,
  width,
  onPress,
  disabled,
}: IButton) => {
  return (
    <S.ButtonContainer 
      onPress={onPress} 
      disabled={disabled} 
      width={width}
    >
      {disabled ? (
        <S.Loading animating={disabled} />
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.ButtonContainer>
  );
}

export default Button;