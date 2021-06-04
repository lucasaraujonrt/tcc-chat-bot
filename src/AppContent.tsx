/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Crashes from 'appcenter-crashes';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { color } from './config/theme.json';
import AppNavigator from './navigationStack';
import * as Dimensions from './services/dimensionsService';
import { navigationRef } from './services/navigationService';

class AppContent extends Component {
  constructor(props: any) {
    super(props);

    this.CheckPreviousSession();
  }

  async CheckPreviousSession() {
    // funcao que se o app crash executa um alerta (exemplo)
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      await Crashes.lastSessionCrashReport();
    }
  }

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
