import React, {useState} from 'react';
import {
  Center,
  VStack,
  Alert,
  HStack,
  Text,
  IconButton,
  CloseIcon,
  Box,
} from 'native-base';

export default function Alerts(props) {
  return (
    <Center mt={5}>
      <Alert maxW="400" status={props.type} colorScheme={props.type}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack alignItems="center">
            <Box
              pl="2"
              _text={{
                color: 'coolGray.600',
              }}>
              {props.msg}
            </Box>
            <IconButton
              onPress={props.onClose}
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={<CloseIcon size="3" />}
              _icon={{
                color: 'coolGray.600',
              }}
            />
          </HStack>
        </VStack>
      </Alert>
    </Center>
  );
}
