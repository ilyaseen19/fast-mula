import React, {useContext} from 'react';
import {Box, HStack, VStack, Text} from 'native-base';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Context from '../../../libs/stateManagement/context';

export default function NormalSub(props) {
  const context = useContext(Context);
  const {primaryColor, myGrey, secondaryColor} = context.colors;

  const user = context.user;

  return (
    <Box bg={primaryColor} borderBottomRadius={15} w="100%" h={user.loan.isApplied ? 85 : 150} pt="2">
      <HStack px="3" py="3" alignItems="center" w="100%">
        <VStack w="100%">
          <Text color={secondaryColor} fontSize="15" fontWeight="bold">
            Welcome to
          </Text>
          <HStack justifyContent="space-between" alignItems="center">
            <Text color={secondaryColor} fontSize={30} fontWeight="bold">
              Fast Mula
            </Text>
            <Pressable
              onPress={
                user && user.loan.isApplied
                  ? props._open
                  : context._applyForLoan
              }
              style={{
                paddingHorizontal: 15,
                paddingVertical: 3,
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Icon
                name="notifications-outline"
                size={35}
                color={secondaryColor}
              />
            </Pressable>
          </HStack>
          {user && user.loan.isApplied ? null : (
            <HStack
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              pr={4}
              mt={3}>
                <Icon
                  name="stopwatch-outline"
                  size={25}
                  color={secondaryColor}
                  style={{marginRight: 3}}
                />
                <Text color={'blue.100'} fontSize={15}>
                  Loans with flexible payment terms and lowest intrest rates in
                  the market
                </Text>
              </HStack>
          )}
        </VStack>
      </HStack>
    </Box>
  );
}
