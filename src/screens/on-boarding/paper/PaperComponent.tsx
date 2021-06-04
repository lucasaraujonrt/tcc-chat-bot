import React from 'react';
import * as S from './PagerComponent.style';

interface IPaper {
  title?: string;
  icon?: React.ReactNode;
  description?: string;
  indicator?: React.ReactNode;
}

const Paper = ({ title, icon, description, indicator }: IPaper) => {
  return (
    <>
      <S.Container>
        <S.WrapperTitle>
          <S.Title>{title}</S.Title>
        </S.WrapperTitle>
        <S.WrapperIcon>{icon}</S.WrapperIcon>
        <S.WrapperDescription>
          <S.Description>{description}</S.Description>
        </S.WrapperDescription>
        {indicator && <S.WrapperIndicator>{indicator}</S.WrapperIndicator>}
      </S.Container>
    </>
  );
};

export default Paper;
