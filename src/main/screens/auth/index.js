import React, {useContext} from 'react';
import Contexts from '../../../libs/contexts';
import Otp from './otp';
import Register from './register';
import GetLoan from '../getLoan';

export default function Auth() {
  const context = useContext(Contexts);
  const {isRegistered, isVerified} = context.system;

  if (!isVerified) return <Otp />;

  if (!isRegistered) return <Register />;

  return <GetLoan />;
}
