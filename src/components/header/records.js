import React, {useContext} from 'react';
import {Box, HStack, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import Context from '../../libs/stateManagement/context';

export default function RecordsHeader(props) {
  const context = useContext(Context);
  const {primaryColor, secondaryColor} = context.colors;

  return (
    <>
      <Box safeAreaTop bg={primaryColor} />
      <HStack bg={primaryColor} px="3" py="3" w="100%">
        <HStack justifyContent="space-between" alignItems="center" w="100%">
          <Pressable onPress={context._goBack}>
            <Icon name="md-chevron-back" size={30} />
          </Pressable>
          <Text color={secondaryColor} fontSize="22" fontWeight="bold">
            {props.title}
          </Text>
        </HStack>
      </HStack>
    </>
  );
}
