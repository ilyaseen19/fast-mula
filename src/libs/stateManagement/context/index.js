import React from 'react';

export default React.createContext({
  colors: Object,
  user: Object,
  userType: String,
  interestRate: String,
  loanAmount: Number,
  isBoard: Boolean,
  selectedContact: String,
  loading: Boolean,
  paymentVerify: Boolean,
  getOtp: Boolean,
  inputFeilds: Object,
  selfie: Object,
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
  _routeToPhoneCap: () => {},
  _confirmPaymentMethod: () => {}
});
