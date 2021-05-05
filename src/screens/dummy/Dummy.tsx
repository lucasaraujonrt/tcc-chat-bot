import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '@mobile/components/input/Input';
import * as S from './Dummy.style';
import { InputType } from '@mobile/enum/inputType';
import Button from '@mobile/components/button/Button';
import realTimeManager from '@mobile/services/chat-manager';
import navigationService from '@mobile/services/navigationService';
import { setUser } from '@mobile/store/actions/user';

const DummyScreen: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const goToChat = async () => {
    if (!name && name.trim() === '') return;
    let user = await realTimeManager.findUser(name);

    if (!user) {
      user = {
        _id: new Date().getTime(),
        name,
        avatar: 'https://64.media.tumblr.com/c20774d95c9034e141939e1caa87d0bc/bb96bfcca3cd61d5-3c/s400x600/c53ec9bd50397598ac0a55060ac201c92bc2a605.jpg'
      };
      dispatch(setUser(user));
      await realTimeManager.saveUser(user);
    };

    navigationService.navigate('chat');
  }

  return (
    <S.Container>
      <S.WrapperInputs>
        <Input
          placeholder="Digite seu nome"
          onChangeText={setName}
          value={name}
          type={InputType.USER}
        />

        <S.WrapperButton>
          <Button 
            title="Avançar"
            onPress={goToChat}
          />
        </S.WrapperButton>
      </S.WrapperInputs>
    </S.Container>
  );
}

export default DummyScreen;