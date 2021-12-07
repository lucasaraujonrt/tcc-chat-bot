import React from 'react';
import Header from '@mobile/components/header/Header';
import Row from '@mobile/components/Row/Row';
import useReduxState from '@mobile/hooks/useReduxState';
import navigationService from '@mobile/services/navigationService';

import { maskCep } from '@mobile/services/masks';
import Button from '@mobile/components/button/Button';
import { useDispatch } from 'react-redux';
import { cleanAuth } from '@mobile/store/actions/auth';
import * as S from './styles';

const Profile: React.FC = () => {
  const { me } = useReduxState().user;
  const { loading } = useReduxState();
  const dispatch = useDispatch();

  const handlePressLogout = () => {
    dispatch(cleanAuth());
  };

  return (
    <>
      <Header onPress={navigationService.back} title="Perfil" />
      <S.Container>
        <S.SubContainer>
          <Row pdTop={3}>
            <S.TextMe fontMe>{me?.name}</S.TextMe>
          </Row>
          <Row pdTop={2}>
            <S.TextMe>{me?.email}</S.TextMe>
          </Row>
          <Row pdTop={2}>
            <S.TextMe>{me?.cellphone}</S.TextMe>
          </Row>
          <Row pdTop={1}>
            <S.TextMe>
              {me?.address} - {me?.number}
            </S.TextMe>
          </Row>
          <Row pdTop={1}>
            <S.TextMe>{me?.district}</S.TextMe>
          </Row>
          <Row pdTop={1}>
            <S.TextMe>
              {me?.city} - {me?.uf}
            </S.TextMe>
          </Row>
          <Row pdTop={1}>
            <S.TextMe>CEP: {maskCep(me?.cep as string)}</S.TextMe>
          </Row>
          <Row justifyContent="center" pdTop={10}>
            <Button
              onPress={handlePressLogout}
              title="Sair"
              disabled={loading > 0}
              width={0.4}
            />
          </Row>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default Profile;
