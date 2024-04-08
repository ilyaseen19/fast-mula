/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import OnboardingScreen from './src/components/onboarding';
import {_getFromStorage, _saveToStorage} from './src/libs/storage/system';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [isBoard, setIsBoard] = useState(false);

  useEffect(() => {
    _getState();
    SplashScreen.hide();
  }, []);

  const _getState = async () => {
    let res = await _getFromStorage('isBoard');

    if (res) setIsBoard(res);
  };

  const _changeState = () => {
    if (_saveToStorage({mykey: 'isBoard', value: true}))
      return setIsBoard(true);
  };

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

  return <OnboardingScreen skipDone={_changeState} />;
}

export default App;
