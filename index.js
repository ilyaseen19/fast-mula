/**
 * @format
 */
import 'react-native-gesture-handler';

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {name as appName} from './app.json';
import App from './App';
import AuthState from './src/libs/stateManagement/states/authState';

export default function Main() {
  return (
    <AuthState>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </AuthState>
  );
}

AppRegistry.registerComponent(appName, () => Main);
