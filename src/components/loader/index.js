import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import context from '../../libs/stateManagement/context';
import {useColorScheme} from 'react-native';

export default function Loader() {
  const isDarkMode = useColorScheme() === 'dark';
  const colors = useContext(context);
  return (
    <ActivityIndicator
      animating={true}
      color={isDarkMode ? '#fff' : colors.primaryColor}
      size="small"
    />
  );
}
