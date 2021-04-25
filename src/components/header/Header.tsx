import React from 'react';
import * as S from './Header.style';

interface IHeader {
  onPress: () => void,
  title?: string,
}

const Header = ({
  title,
  onPress,
}: IHeader) => {
  return (
    <S.Container>
      <S.WrapperIcon onPress={onPress}>
        <S.IconFeather />
      </S.WrapperIcon>
      <S.WrapperTitle>
        <S.Title>{title}</S.Title>
      </S.WrapperTitle>
    </S.Container>
  );
}

export default Header;