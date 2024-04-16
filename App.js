/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import OnboardingScreen from './src/components/onboarding';
import Context from './src/libs/stateManagement/context';
import Main from './src/main';
import {_getFromStorage} from './src/libs/storage/system';
import AppState from './src/libs/stateManagement/states/appState';
import colors from './src/components/colors';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const context = useContext(Context);
  const {isBoard} = context;

  const backgroundStyle = {
    display: 'flex',
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : colors.primaryColor,
  };

  if (isBoard)
    return (
      <SafeAreaView style={backgroundStyle}>
        <NavigationContainer>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <AppState>
            <Main />
          </AppState>
        </NavigationContainer>
      </SafeAreaView>
    );

  return <OnboardingScreen skipDone={context._changeState} />;
}

export default App;
