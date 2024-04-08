import React, {useState, useEffect} from 'react';
import Context from '../../context';
import {useNavigation} from '@react-navigation/native';
import {
  _getFromStorage,
  _getUserData,
  _removeFromStorage,
  _saveToStorage,
} from '../../../storage/system';
import colors from '../../../../components/colors';

export default function AuthState(props) {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);

  return (
    <Context.Provider
      value={{
        colors,
      }}>
      {props.children}
    </Context.Provider>
  );
}
