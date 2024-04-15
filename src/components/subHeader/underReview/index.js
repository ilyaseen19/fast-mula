import React, {useContext} from 'react';
import {Box, HStack, VStack, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Context from '../../../libs/stateManagement/context';

export default function ReviewHeader() {
  const context = useContext(Context);
  const {primaryColor, secondaryColor, myGrey} = context.colors;

  return (
    <Box bg={primaryColor} borderBottomRadius={15} w="100%" h={100} pt="2">
      <HStack px="3" py="3" alignItems="center" w="100%">
        <VStack w="100%">
          <HStack alignItems="center">
            <Icon
              name="information-circle-outline"
              size={30}
              color={secondaryColor}
              style={{marginRight: 5}}
            />
            <Text color={secondaryColor} fontSize={20} fontWeight="bold">
             Your loan is under review
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Text fontSize={15} color={myGrey}>
              Please be patient and wait for the review results,
              your application will be processed as soon as possible!
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
