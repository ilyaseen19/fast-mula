import React from 'react';

export default React.createContext({
  colors: Object,
  user: Object,
  isBoard: Boolean,
  selectedContact: String,
  loading: Boolean,
  inputFeilds: Object,
  _changeState: () => {},
  routeWithProps: () => {},
  _routeToPage: () => {},
  _onChange: () => {},
  _goBack: () => {},
  _getContacts: () => {},
  _handleIdInfo: () => {},
  _handlePesInfo: () => {},
  _hadnleWorkInfo: () => {},
  _handleRegister: () => {},
});
