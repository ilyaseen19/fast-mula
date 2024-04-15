import React, {useContext} from 'react';
import Contexts from '../../../../libs/contexts';
import PhoneCap from '../../../../components/phoneCapture';
import VerifyOtp from '../../../../components/verifyPhone';

export default function Otp() {
  const context = useContext(Contexts);
  const {isCapture} = context.system;

  if (isCapture) return <PhoneCap />;
  if (!isCapture) return <VerifyOtp />;

  return null;
}
