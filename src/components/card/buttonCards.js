import React, {useContext} from 'react';
import {HStack, Stack, Center} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Context from '../../libs/stateManagement/context';

export default function ButtonCard(props) {
  const context = useContext(Context);
  const {primaryColor, secondaryColor, text, myGrey, danger} = context.colors;

  return (
    <Stack space="2" alignItems="center">
      <HStack space="3" alignItems="center">
        <Center
          size={150}
          bg={secondaryColor}
          shadow={5}
          zIndex={1}
          rounded="lg">
          {props.children}
        </Center>
      </HStack>
    </Stack>
  );
}
