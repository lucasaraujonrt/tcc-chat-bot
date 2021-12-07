import React from 'react';
import navigationService from '@mobile/services/navigationService';

import Header from '@mobile/components/header/Header';
import Row from '@mobile/components/Row/Row';
import Share from '@mobile/services/share';
import * as S from './styles';

const Support: React.FC = () => {
  return (
    <>
      <Header onPress={navigationService.back} title="Perfil" />
      <S.Container>
        <S.SubContainer>
          <Row justifyContent="center" pdTop={3}>
            <S.TextMe fontMe>Fale conosco</S.TextMe>
          </Row>
          <Row pdTop={2}>
            <S.TextMe onPress={() => Share.mail('rafaelg9trevizan@gmail.com')}>
              rafaelg9trevizan@gmail.com
            </S.TextMe>
          </Row>
          <Row pdTop={2}>
            <S.TextMe onPress={() => Share.whatsApp('96440-8232', '11')}>
              WhatsApp: (11) 96440-8232
            </S.TextMe>
          </Row>
          <Row pdTop={1}>
            <S.TextMe onPress={() => Share.phone('11 96440-8232')}>
              Telefone: (11) 96440-8232
            </S.TextMe>
          </Row>

          <Row justifyContent="center" pdTop={30}>
            <S.TextMe>Versão: 1.0.1</S.TextMe>
          </Row>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default Support;
