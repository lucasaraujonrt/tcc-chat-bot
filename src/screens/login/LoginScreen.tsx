import React, { useState } from 'react';
import EmailValidator from 'email-validator';
import Button from '@mobile/components/button/Button';
import Input from '@mobile/components/input/Input';
import { InputType } from '@mobile/enum/inputType';
import navigationService from '@mobile/services/navigationService';
import * as MessageService from '@mobile/services/message';
import { useDispatch } from 'react-redux';
import { authenticate } from '@mobile/store/actions/auth';
import Tony from '@mobile/assets/images/ic_logo_tony.svg';
import * as Window from '@mobile/services/dimensionsService';

import useReduxState from '@mobile/hooks/useReduxState';
import * as S from './LoginScreen.style';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  // const { loading } = useReduxState();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const validateEmail = EmailValidator.validate(email);
    navigationService.reset({ index: 0, routes: [{ name: 'Content' }] });

    if (!validateEmail) {
      return MessageService.error('E-mail inválido');
    }

    if (password.length < 6 || password.trim() === '') {
      return MessageService.error('Digite uma senha válida');
    }
    dispatch(
      authenticate({ email, password }, (data) => {
        if (data) {
          navigationService.reset({ index: 0, routes: [{ name: 'Content' }] });
        }
      })
    );
  };

  return (
    <>
      <S.Container>
        <S.WrapperContainer>
          <S.WrapperLogo>
            <Tony
              width={Window.widthScale(0.25)}
              height={Window.heightScale(0.2)}
            />
          </S.WrapperLogo>
          <S.SubContainer>
            <S.TextLogo bold>Seja bem vindo!</S.TextLogo>
            <S.WrapperForm>
              <Input
                value={email}
                onChangeText={setEmail}
                type={InputType.EMAIL}
                placeholder="E-mail"
                autoCapitalized="none"
                keyboardType="email-address"
                maxLength={120}
              />
              <Input
                value={password}
                onChangeText={setPassword}
                type={InputType.PASSWORD}
                password
                placeholder="Senha"
                autoCapitalized="none"
                keyboardType="default"
                maxLength={120}
              />
              <S.WrapperLink
                onPress={() => navigationService.navigate('forgot')}
              >
                <S.TextLogo link>Esqueci minha senha</S.TextLogo>
              </S.WrapperLink>
              <Button
                title="Entrar"
                onPress={handleSubmit}
                width={0.6}
                disabled={loading}
              />
            </S.WrapperForm>
          </S.SubContainer>
        </S.WrapperContainer>
      </S.Container>
    </>
  );
};

export default Login;
