import React, { ReactNode } from 'react';
import User from '@mobile/assets/svg/home/ic_user.svg';
import Form from '@mobile/assets/svg/home/ic_form.svg';
import Support from '@mobile/assets/svg/home/ic_support.svg';

export enum HomeEnum {
  PROFILE = 1,
  STATUS = 2,
  FORM = 3,
  SUPPORT = 4,
}

export const HomeFirstRow: Array<{
  id: number;
  name: string;
  icon: ReactNode;
  navigation: string;
}> = [
  {
    id: HomeEnum.PROFILE,
    name: 'Perfil',
    icon: <User width={50} height={50} />,
    navigation: 'profile',
  },
  {
    id: HomeEnum.SUPPORT,
    name: 'Suporte',
    icon: <Support width={50} height={50} />,
    navigation: 'support',
  },
];

export const HomeSecondRow: Array<{
  id: number;
  name: string;
  icon: ReactNode;
  navigation: string;
}> = [
  {
    id: HomeEnum.FORM,
    name: 'Formulário',
    icon: <Form width={50} height={50} />,
    navigation: 'profile',
  },
  {
    id: HomeEnum.SUPPORT,
    name: 'Suporte',
    icon: <Support width={50} height={50} />,
    navigation: 'support',
  },
];
