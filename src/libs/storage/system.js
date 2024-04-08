import asyncStorage from '@react-native-async-storage/async-storage';
// import {usersBaseUrl} from '../endpoints';

const _saveToStorage = async data => {
  const {mykey, value} = data;
  const valueTOStore = JSON.stringify(value);

  await asyncStorage.setItem(mykey, valueTOStore);

  return true;
};

const _removeFromStorage = async () => {
  await asyncStorage.clear();

  return true;
};

const _getFromStorage = async key => {
  const storedData = await asyncStorage.getItem(key);

  const data = await JSON.parse(storedData);

  return data;
};

const _getUserData = async id => {
  let results = {};
  try {
    // const url = usersBaseUrl + 'findUser/' + id;
    // let res = await fetch(url);
    // let feedBack = await res.json();

    // results = feedBack;
  } catch (error) {
    return (results = {
      success: 0,
      message: 'Please check your internet connection',
    });
  }

  return results;
};

export {_saveToStorage, _getFromStorage, _getUserData, _removeFromStorage};
