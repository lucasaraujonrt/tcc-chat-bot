import React, { ReactElement } from 'react';

import { createStack } from './services/navigationService';
import Home from './screens/home';

const MainStack = createStack();
const ContentStack = createStack();

const routeList: Array<{name: string, component: ReactElement}> = [
    {
      name: 'home',
      component: <ContentStack.Screen name="home" component={Home}/>
    }
];


const ContentNavigator = () => (
  <ContentStack.Navigator screenOptions={{ headerShown: false }}>
    {routeList.map((item) => item.component)}
  </ContentStack.Navigator>
);


const AppNavigator = () => (
  <MainStack.Navigator initialRouteName="Content" screenOptions={{ headerShown: false }}>
    <MainStack.Screen name="Content" component={ContentNavigator} />
  </MainStack.Navigator>
);

export default AppNavigator;