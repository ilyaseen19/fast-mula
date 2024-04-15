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

  const [user, setUser] = useState({
    loan: {
      loanStatus: "Not applied",
      isApplied: false,
    }
  });
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider
      value={{
        colors,
        loading,
        user
      }}>
      {props.children}
    </Context.Provider>
  );
}
