import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '@mobile/components/input/Input';
import { InputType } from '@mobile/enum/inputType';
import Button from '@mobile/components/button/Button';
import realTimeManager from '@mobile/services/chat-manager';
import navigationService from '@mobile/services/navigationService';
import { setUser } from '@mobile/store/actions/user';
import * as S from './Dummy.style';

const DummyScreen: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const goToChat = async () => {
    if (!name && name.trim() === '') return;
    let user = await realTimeManager.findUser(name);

    if (user === null) {
      user = {
        _id: new Date().getTime(),
        name,
        avatar:
          'https://i.pinimg.com/originals/79/a6/f2/79a6f25706fe05e38089e08239044eb5.jpg',
      };
      dispatch(setUser(user));
      await realTimeManager.saveUser(user);
    }

    navigationService.navigate('chat');
  };

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
          <Button title="Avançar" onPress={goToChat} />
        </S.WrapperButton>
      </S.WrapperInputs>
    </S.Container>
  );
};

export default DummyScreen;
