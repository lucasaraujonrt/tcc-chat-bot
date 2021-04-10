import React from 'react';
import Header from '../../components/header/Header';
import navigationService from '../../services/navigationService';
import * as S from './ForgotPasswordScreen.style';

// import { Container } from './styles';

const ForgotPasswordScreen: React.FC = () => {
  return (
    <>
    <Header onPress={() => navigationService.back()} title="Esqueci a senha" />
    <S.Container>
    <S.WrapperForm>

    </S.WrapperForm>
    </S.Container>
  </>
  );
}

export default ForgotPasswordScreen;