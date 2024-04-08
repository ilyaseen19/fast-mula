import React, {useState, useEffect} from 'react';
import Context from '../../context';
import {useNavigation} from '@react-navigation/native';
import {
  _getFromStorage,
  _getUserData,
  _removeFromStorage,
  _saveToStorage,
} from '../../../storage/system';
import {PermissionsAndroid, Alert} from 'react-native';
import colors from '../../../../components/colors';

export default function AppState(props) {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);

  const [system, setSystem] = useState({
    interestRate: {low: 26, high: 28},
    loading: false,
    contact: '',
  });

  return (
    <Context.Provider
      value={{
        colors,
      }}>
      {props.children}
    </Context.Provider>
  );
}
