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
      loanStatus: 'Not applied',
      isApplied: false,
    },
    isRegistered: false,
    isVerified: false,
    registeration: "id",
  });

  const [loading, setLoading] = useState(false);

  const routeWithProps = payload => {
    navigation.navigate(payload.path, {title: payload.title});
  };

  const _routeToPage = payload => {
    navigation.navigate(payload)
  }

  return (
    <Context.Provider
      value={{
        colors,
        loading,
        user,
        routeWithProps,
        _routeToPage,
      }}>
      {props.children}
    </Context.Provider>
  );
}
