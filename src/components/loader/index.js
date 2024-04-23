import React, {useContext, useEffect} from 'react';
import {Spinner} from 'native-base';
import context from '../../libs/stateManagement/context';
import {useColorScheme} from 'react-native';

export default function Loader() {
  const isDarkMode = useColorScheme() === 'dark';
  const colors = useContext(context);
  return (
    <Spinner colo={colors.primaryColor} accessibilityLabel="Loading posts" />
  );
}
