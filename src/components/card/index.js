import React, {useContext} from 'react';
import {Box, HStack, VStack, Text} from 'native-base';
import Contexts from '../../libs/contexts';
import {Pressable} from 'react-native';

export default function RecordsCard(props) {
  const context = useContext(Contexts);
  const {primaryColor, secondaryColor, myGrey, white, success} = context.colors;

  const _renderLoanStats = status => {
    if (status === 'Granted')
      return (
        <HStack>
          <Text
            textAlign="center"
            // bg={success}
            borderColor={success}
            borderWidth={2}
            padding={0.5}
            borderRadius={7}
            color={success}
            fontWeight="bold"
            fontSize={18}>
            Granted
          </Text>
        </HStack>
      );

    if (status === 'Rejected')
      return (
        <HStack>
          <Text
            textAlign="center"
            // bg={success}
            borderColor="red.700"
            borderWidth={2}
            padding={0.5}
            borderRadius={7}
            color="red.700"
            fontWeight="bold"
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
            // bg={success}
            borderColor="orange.300"
            borderWidth={2}
            padding={0.5}
            borderRadius={7}
            color="orange.300"
            fontWeight="bold"
            fontSize={18}>
            Review
          </Text>
        </HStack>
      );

    return null;
  };

  return (
    <Box mb={3}>
      <Pressable
        onPress={() => {
          context._loanDetails(props.loan);
        }}>
        <Box
          alignSelf="center"
          w="90%"
          bg={white}
          mt={3}
          h={100}
          borderRadius={5}
          shadow={1}
          p={3}>
          <HStack h="100%" justifyContent="space-between" alignItems="center">
            <VStack>
              <Text color={myGrey} fontWeight="bold" fontSize={18} mb={1}>
                Loan amount
              </Text>
              <Text color={primaryColor} fontWeight="bold" fontSize={20} mb={1}>
                GHS {props.loan.amount}.00
              </Text>
              <Text color={myGrey} fontWeight="bold" fontSize={12} mb={1}>
                {new Date(props.loan.doa).toUTCString()}
              </Text>
            </VStack>
            {_renderLoanStats(props.loan.loanStatus)}
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
}
