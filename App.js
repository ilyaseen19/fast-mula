/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import OnboardingScreen from './src/components/onboarding';
import Context from './src/libs/stateManagement/context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const context = useContext(Context);
  const {isBoard} = context;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (isBoard)
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Text>App</Text>
        </ScrollView>
      </SafeAreaView>
    );

  return <OnboardingScreen skipDone={context._changeState} />;
}

export default App;
