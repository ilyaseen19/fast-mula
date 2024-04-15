import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Context from '../../libs/stateManagement/context';

export default function MainHeader() {
  const context = useContext(Context);
  const {primaryColor, secondaryColor} = context.colors;
  // const {loan} = context.user !== null ? context.user : {};

  const {appName} = styles;

  // const checkLoanStatus = () => {
  //   if (
  //     loan === undefined ||
  //     loan.loanStatus === undefined ||
  //     loan.loanStatus === 'Not applied' ||
  //     loan.loanStatus === 'Granted'
  //   )
  //     return (
  //       <Text color={secondaryColor} fontSize="30" fontWeight="bold">
  //         PERFICIENT LOANS
  //       </Text>
  //     );

  //   if (
  //     loan.loanStatus !== undefined &&
  //     loan.loanStatus !== 'Not applied' &&
  //     loan.loanStatus !== 'Granted'
  //   )
  //     return (
  //       <Text color={secondaryColor} fontSize="30" fontWeight="bold">
  //         LOAN STATUS
  //       </Text>
  //     );
  // };

  return (
    <>
      {/* <Box safeAreaTop bg={primaryColor} /> */}
      <View
        style={{
          backgroundColor: primaryColor,
          padding: 3,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <View style={appName}>
          {/* {checkLoanStatus()} */}
          <Text style={{color: secondaryColor, fontSize: 16}}>
            Get a loan in minutes
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appName: {
    display: 'flex',
    flexDirection: 'column',
  },
});
