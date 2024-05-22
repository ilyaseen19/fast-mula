import React, {useContext} from 'react';
import {Box, HStack, VStack, Text} from 'native-base';
import {Pressable} from 'react-native';
import Context from '../../libs/stateManagement/context';

export default function RecordsCard(props) {
  const context = useContext(Context);
  const {primaryColor, secondaryColor, myGrey, white, success} = context.colors;

  const _renderLoanStats = ({status, paymentStatus}) => {
    if (status === 'Granted')
      return (
        <VStack>
          <Text
            textAlign="center"
            padding={0.5}
            color={success}
            fontSize={18}>
            Granted
          </Text>
          <Text
            textAlign="center"
            color={primaryColor}
            fontSize={15}>
            {paymentStatus}
          </Text>
        </VStack>
      );

    if (status === 'Rejected')
      return (
        <HStack>
          <Text
            textAlign="center"
            color="red.700"
            fontSize={18}>
            Rejected
          </Text>
        </HStack>
      );

    if (status === 'Review')
      return (
        <HStack>
          <Text
            textAlign="center"
            color="orange.300"
            fontSize={18}>
            Under Review
          </Text>
        </HStack>
      );

    return null;
  };

  return (
    <Box mb={3}>
      <Pressable
        onPress={() => {
          // context._loanDetails(props.loan);
        }}>
        <Box
          alignSelf="center"
          w="90%"
          bg={white}
          mt={3}
          h={100}
          borderRadius={10}
          shadow={1}
          p={3}>
          <HStack h="100%" justifyContent="space-between" alignItems="center">
            <VStack>
              <Text color={myGrey} fontWeight="bold" fontSize={18} mb={1}>
                Loan amount
              </Text>
              <Text color={primaryColor} fontWeight="bold" fontSize={20} mb={1}>
                ZMW {props.loan.amount}.00
              </Text>
              <Text color={myGrey} fontWeight="bold" fontSize={12} mb={1}>
                {new Date(props.loan.doa).toDateString()}
              </Text>
            </VStack>
            {_renderLoanStats({status: props.loan.loanStatus, paymentStatus: props.loan.paymentStatus})}
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
}
