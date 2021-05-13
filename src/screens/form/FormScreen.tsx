import React from 'react';
import * as S from './FormScreen.style';
import Header from '../../components/header/Header';
import navigationService from '@mobile/services/navigationService';

const Form: React.FC = () => {
    return (
        <>
          <Header onPress={navigationService.back} title="Formulário" />
        <S.Container>
            <S.WhiteBackground>

            </S.WhiteBackground>
        </S.Container>
        </>
    )
}

export default Form;