import React, { useState } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import KeyboardAvoiding from '../../components/keyboard-avoiding/KeyboardAvoiding';
import { InputType } from '../../enum/inputType';
import * as S from './LoginScreen.style';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <>
      <S.Container>
          <S.WrapperLogo>
            <S.TextLogo link>Logo aqui</S.TextLogo>
          </S.WrapperLogo>
          <S.SubContainer>
          <KeyboardAvoiding>
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
              </S.WrapperForm>
              <S.WrapperLink onPress={() => console.log('apertei')}>
              <S.TextLogo link>Esqueci minha senha</S.TextLogo>
              </S.WrapperLink>
              <Button 
                title="Entrar"
                onPress={()=> console.log('aaaaaaaaaaa')}
                width={0.5}
                // disabled
                />
                </KeyboardAvoiding>
            </S.SubContainer>
      </S.Container>
    </>
  );
}

export default Login;