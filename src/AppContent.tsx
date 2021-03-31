import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView , Platform, StatusBar } from 'react-native';
import * as Dimensions from './services/dimensionsService'
import { color } from './config/theme.json';

import AppNavigator from './navigationStack';
import { navigationRef } from './services/navigationService';

class AppContent extends Component {
  render(){
    return(
      <>
        <StatusBar translucent barStyle="light-content" animated backgroundColor={color.primary}/>
        <KeyboardAvoidingView style={{ flex: 1, marginTop: Dimensions.heightScale(0.04) }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <NavigationContainer ref={navigationRef}>
            <AppNavigator />
          </NavigationContainer>
        </KeyboardAvoidingView>
      </>
    )
  }
};

export default AppContent;
