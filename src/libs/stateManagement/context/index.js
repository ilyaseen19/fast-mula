import React from 'react';

export default React.createContext({
  colors: Object,
  user: Object,
  isBoard: Boolean,
  selectedContact: String,
  _changeState: () => {},
});
