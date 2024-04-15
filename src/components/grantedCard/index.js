import React, {useContext} from 'react';
import {Box, HStack, VStack, Text, Image} from 'native-base';
import {_checkDuration} from '../../libs/functions/loan';
import Context from '../../libs/stateManagement/context';
import { myGrey } from '../colors';

export default function GrantedNoti() {
  const context = useContext(Context);
  const {primaryColor, danger, secondaryColor} = context.colors;
  const {loan} = context.user !== null ? context.user : {};

  if (loan && loan.loanStatus === 'Review') {
    return <Image height={200} width={"100%"} alt='review' source={require("../images/review.png")} />
  };

  if (loan && loan.loanStatus === 'Rejected') {
    return <Image height={250} width={"100%"} alt='review' source={require("../images/rejected.png")} />
  }

  if (loan && loan.loanStatus === 'Not applied') {
    return <Image alignSelf="center" height={300} width={300} alt='review' source={require("../images/pay.png")} />
  }

  if (loan && loan.isApplied)
    return (
      <Box
        w="98%"
        alignSelf="center"
        pt="1"
        my={3}
        borderRadius={20}
        borderColor={secondaryColor}
        // borderWidth={1}
        >
        <HStack px="3" py="2" alignItems="center" w="100%">
          <VStack w="100%">
            <HStack>
              {loan.paymentStatus !== undefined &&
              loan.paymentStatus === 'Overdue' ? (
                <Text color={danger} fontSize={15} fontWeight="bold">
                  You have been overdue for {-loan.days} days
                </Text>
              ) : (
                <Text color={secondaryColor} fontSize={15} fontWeight="bold">
                  You have {loan.days} days left to pay your Loan
                </Text>
              )}
            </HStack>
            {loan.paymentStatus !== undefined &&
            loan.paymentStatus === 'Overdue' ? (
              <HStack alignItems="center">
                <Text color={secondaryColor} fontSize={22} fontWeight="bold">
                  ZMW {loan.reAmount}.00
                </Text>
              </HStack>
            ) : (
              <HStack justifyContent="space-around" alignItems="center">
                <Text color={secondaryColor} fontSize={20} fontWeight="bold">
                  ZMW {loan.reAmount}.00
                </Text>
                <Text color={secondaryColor} fontSize={15} fontWeight="bold">
                  payable by
                </Text>
                <Text color={secondaryColor} fontSize={20} fontWeight="bold">
                  {new Date(loan.payDate).toLocaleDateString()}
                </Text>
              </HStack>
            )}
            {loan.paymentStatus !== undefined &&
            loan.paymentStatus === 'Overdue' ? (
              <HStack justifyContent="space-between" alignItems="center">
                <Text color={myGrey} fontSize={15}>
                  You have been overdue for {-loan.days} days and a penalty of
                  2% will be incured on daily bases. Please pay as soon as
                  possible
                </Text>
              </HStack>
            ) : (
              <HStack justifyContent="space-between" alignItems="center">
                <Text color={myGrey} fontSize={15}>
                  A penalty of 2% of the amount will be incured on daily bases,
                  if the payment date elapses without payment.
                </Text>
              </HStack>
            )}
          </VStack>
        </HStack>
      </Box>
    );
}
