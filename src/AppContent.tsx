import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { color } from './config/theme.json';
import AppNavigator from './navigationStack';
import * as Dimensions from './services/dimensionsService';
import { navigationRef } from './services/navigationService';

class AppContent extends Component {
  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          animated
          backgroundColor={color.primary}
        />
        <KeyboardAvoidingView
          style={{ flex: 1, paddingTop: Dimensions.heightScale(0.0002) }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <NavigationContainer ref={navigationRef}>
            <AppNavigator />
          </NavigationContainer>
        </KeyboardAvoidingView>
      </>
    );
  }
}

export default AppContent;
