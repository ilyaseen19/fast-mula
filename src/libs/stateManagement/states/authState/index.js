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
import SplashScreen from 'react-native-splash-screen';

export default function AuthState(props) {
  // const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [isBoard, setIsBoard] = useState(_getFromStorage('isBoard'));

  const _changeState = () => {
    if (_saveToStorage({mykey: 'isBoard', value: true}))
      return setIsBoard(true);
  };

  useEffect(() => {
    _getState();
    SplashScreen.hide();
  }, []);

  const _getState = async () => {
    let res = await _getFromStorage('isBoard');

    if (res) setIsBoard(res);
  };

  return (
    <Context.Provider
      value={{
        colors,
        isBoard,
        user,
        _changeState,
      }}>
      {props.children}
    </Context.Provider>
  );
}
