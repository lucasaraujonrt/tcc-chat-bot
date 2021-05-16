import React, { useState } from 'react';
import EmailValidator from 'email-validator';
import Button from '@mobile/components/button/Button';
import Input from '@mobile/components/input/Input';
import { InputType } from '@mobile/enum/inputType';
import navigationService from '@mobile/services/navigationService';
import * as MessageService from '@mobile/services/message';
import { useDispatch } from 'react-redux';
import { authenticate } from '@mobile/store/actions/auth';

// import useReduxState from '@mobile/hooks/useReduxState';
import * as S from './LoginScreen.style';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  // const { loading } = useReduxState();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const validateEmail = EmailValidator.validate(email);
    if (!validateEmail) {
      return MessageService.error('E-mail inválido');
    }

    if (password.length < 6 || password.trim() === '') {
      return MessageService.error('Digite uma senha válida');
    }
    setLoading(true);
    dispatch(
      authenticate({ email, password }, (data) => {
        if (data) {
          navigationService.reset({ index: 0, routes: [{ name: 'Content' }] });
        }
      })
    );
    setLoading(false);
  };

  return (
    <>
      <S.Container>
        <S.WrapperContainer>
          <S.WrapperLogo>
            <S.TextLogo link>Logo aqui</S.TextLogo>
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
