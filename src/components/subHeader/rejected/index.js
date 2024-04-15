import React, {useContext} from 'react';
import {Box, HStack, VStack, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loader from '../../loader';
import Context from '../../../libs/stateManagement/context';

export default function RejectedHeader() {
  const context = useContext(Context);
  const {primaryColor, secondaryColor} = context.colors;

  return (
    <Box bg={primaryColor} borderBottomRadius={15} w="100%" h={110} pt="2">
      <HStack px="3" py="3" alignItems="center" w="100%">
        <VStack w="100%">
          <HStack alignItems="center">
            <Icon
              name="information-circle-outline"
              size={30}
              color={secondaryColor}
              style={{marginRight: 5}}
            />
            <Text color={secondaryColor} fontSize={25} fontWeight="bold">
              Application failed
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Text fontSize={15}>
              Unfortunately your loan application has failed, please try again
              later.
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
