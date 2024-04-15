import React, {useContext} from 'react';
import NormalSub from './normal';
import RejectedHeader from './rejected';
import ReviewHeader from './underReview';
import Context from '../../libs/stateManagement/context';

export default function SubHeader(props) {
  const context = useContext(Context);
  const {loan} = context.user !== null ? context.user : {};

  if (
    loan === undefined ||
    loan.loanStatus === undefined ||
    loan.loanStatus === 'Not applied' ||
    loan.loanStatus === 'Granted'
  )
    return <NormalSub _open={props.onOpen} />;

  if (loan.loanStatus !== undefined && loan.loanStatus === 'Review')
  return <ReviewHeader />;

  if (loan.loanStatus !== undefined && loan.loanStatus === 'Rejected')
    return <RejectedHeader />;
}
