import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as Storage from './services/storage';
import navigationService, { createStack } from './services/navigationService';
// eslint-disable-next-line import/no-named-as-default
import useReduxState from './hooks/useReduxState';
import ForgotPassword from './screens/forgot-password';
import Home from './screens/home';
import FormScreen from './screens/form';
import LoginScreen from './screens/login';
import OnBoarding from './screens/on-boarding';

import Chat from './screens/chat';
import Dummy from './screens/dummy';
import { checkLogin } from './store/actions/auth';

const MainStack = createStack();
const ContentStack = createStack();
const StartStack = createStack();

const routeList: Array<{ name: string; component: ReactElement }> = [
  {
    name: 'home',
    component: <ContentStack.Screen name="home" component={Home} />,
  },
  {
    name: 'dummy',
    component: <ContentStack.Screen name="dummy" component={Dummy} />,
  },
  {
    name: 'chat',
    component: <ContentStack.Screen name="chat" component={Chat} />,
  },
  {
    name: 'form',
    component: <ContentStack.Screen name="form" component={FormScreen} />,
  },
];

const ContentNavigator = () => (
  <ContentStack.Navigator screenOptions={{ headerShown: false }}>
    {routeList.map((item) => item.component)}
  </ContentStack.Navigator>
);

const StartNavigator = () => {
  const dispatch = useDispatch();
  const { logged } = useReduxState().auth;

  useEffect(() => {
    dispatch(checkLogin());
    const redirect = async () => {
      const firstAccess = await Storage.getItem('@firstAccess');
      if (!firstAccess) {
        await Storage.setItem('@firstAccess', 'true');
        navigationService.reset({ index: 0, routes: [{ name: 'onboarding' }] });
      } else if (logged) {
        navigationService.reset({ index: 0, routes: [{ name: 'Content' }] });
      }
    };
    redirect();
  }, [dispatch, logged]);

  return (
    <StartStack.Navigator screenOptions={{ headerShown: false }}>
      <StartStack.Screen name="onboarding" component={OnBoarding} />
      <StartStack.Screen name="login" component={LoginScreen} />
      <StartStack.Screen name="forgot" component={ForgotPassword} />
    </StartStack.Navigator>
  );
};

const AppNavigator = () => (
  <MainStack.Navigator
    initialRouteName="Start"
    screenOptions={{ headerShown: false }}
  >
    <MainStack.Screen name="Start" component={StartNavigator} />
    <MainStack.Screen name="Content" component={ContentNavigator} />
  </MainStack.Navigator>
);

export default AppNavigator;
