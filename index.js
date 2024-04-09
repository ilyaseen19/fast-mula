/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './App';
import AuthState from './src/libs/stateManagement/states/authState';

export default function Main() {
  return (
    <AuthState>
      <PaperProvider>
        <App />
      </PaperProvider>
    </AuthState>
  );
}

AppRegistry.registerComponent(appName, () => Main);
