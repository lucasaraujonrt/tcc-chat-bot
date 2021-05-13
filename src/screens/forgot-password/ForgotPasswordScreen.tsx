import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Button from '@mobile/components/button/Button';
import Header from '@mobile/components/header/Header';
import Input from '@mobile/components/input/Input';
import { ForgotPassword } from '@mobile/enum/forgotPasswordEnum';
import { InputType } from '@mobile/enum/inputType';
import navigationService from '@mobile/services/navigationService';
import * as S from './ForgotPasswordScreen.style';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(ForgotPassword.FORGOT);
  // const dispatch = useDispatch();

  const onHandleSubmitEmail = () => {
    // dispatch();
    setStep(ForgotPassword.CHANGE_PASSWORD);
  };

  const onHandleSubmit = () => {
    navigationService.reset({ index: 0, routes: [{ name: 'login' }] });
  };

  return (
    <>
      <Header onPress={navigationService.back} title="Esqueci a senha" />
      <S.Container>
        <S.WrapperForm>
          {step === ForgotPassword.FORGOT ? (
            <>
              <S.WrapperTitle>
                <S.Title>
                  Insira o endereço de e-mail que você usou quando se cadastrou
                  e enviaremos instruções para redefinir a sua senha.
                </S.Title>
              </S.WrapperTitle>
              <S.WrapperInput>
                <Input
                  placeholder="Digite seu e-mail"
                  type={InputType.EMAIL}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalized="none"
                />
              </S.WrapperInput>
              <S.WrapperButton>
                <Button
                  title="Enviar e-mail"
                  onPress={onHandleSubmitEmail}
                  width={0.6}
                />
              </S.WrapperButton>
            </>
          ) : (
            <>
              <S.WrapperTitle>
                <S.Title>
                  Para você conseguir o acesso novamente, digite o código
                  enviado para seu e-mail e a nova senha
                </S.Title>
              </S.WrapperTitle>
              <S.WrapperInput>
                <Input
                  placeholder="Digite seu código"
                  type={InputType.EMAIL}
                  value={code}
                  onChangeText={setCode}
                  autoCapitalized="none"
                />
                <Input
                  placeholder="Senha"
                  type={InputType.PASSWORD}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalized="none"
                />
                <Input
                  placeholder="Confirme sua senha"
                  type={InputType.PASSWORD}
                  autoCapitalized="none"
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
              </S.WrapperInput>
              <S.WrapperButton>
                <Button
                  title="Trocar senha"
                  onPress={onHandleSubmit}
                  width={0.6}
                />
              </S.WrapperButton>
            </>
          )}
        </S.WrapperForm>
      </S.Container>
    </>
  );
};

export default ForgotPasswordScreen;
