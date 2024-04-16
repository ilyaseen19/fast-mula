import React, {useContext} from 'react';
import {HStack, Stack, Center} from 'native-base';
import Context from '../../libs/stateManagement/context';
import {Pressable} from 'react-native';

export default function ButtonCard(props) {
  const context = useContext(Context);
  const {secondaryColor} = context.colors;

  return (
    <Stack space="2" alignItems="center">
      <Pressable onPress={props.press}>
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
      </Pressable>
    </Stack>
  );
}
