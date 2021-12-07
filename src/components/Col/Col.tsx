import React from 'react';
import { ViewProps } from 'react-native';
import * as S from './Col.styles';

interface ICol extends ViewProps {
  children: React.ReactNode;
  pdTop?: number;
  pdBottom?: number;
  pdLeft?: number;
  pdRight?: number;
}

const Col = (
  props: ICol,
  { children, pdBottom, pdLeft, pdRight, pdTop }: ICol
) => {
  return (
    <S.Col
      pdTop={pdTop}
      pdBottom={pdBottom}
      pdLeft={pdLeft}
      pdRight={pdRight}
      {...props}
    >
      {children}
    </S.Col>
  );
};

export default Col;
