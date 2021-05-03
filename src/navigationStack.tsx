import React, { ReactElement } from 'react';
import ForgotPassword from './screens/forgot-password';
import Home from './screens/home';
import LoginScreen from './screens/login';
import OnBoarding from './screens/on-boarding';
import { createStack } from './services/navigationService';


const MainStack = createStack();
const ContentStack = createStack();
const StartStack = createStack();

const routeList: Array<{name: string, component: ReactElement}> = [
    {
      name: 'home',
      component: <ContentStack.Screen name="home" component={Home}/>
    },
];

const ContentNavigator = () => (
  <ContentStack.Navigator screenOptions={{ headerShown: false }}>
    {routeList.map((item) => item.component)}
  </ContentStack.Navigator>
);

const StartNavigator = () => (
  <StartStack.Navigator screenOptions={{ headerShown: false }}>
    <StartStack.Screen name="onboarding" component={OnBoarding} />
    <StartStack.Screen name="login" component={LoginScreen} />
    <StartStack.Screen name="forgot" component={ForgotPassword} />
  </StartStack.Navigator>
);

const AppNavigator = () => (
  <MainStack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
    <MainStack.Screen name='Start' component={StartNavigator} />
    <MainStack.Screen name="Content" component={ContentNavigator} />
  </MainStack.Navigator>
);

export default AppNavigator;