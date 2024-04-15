import React, {useContext} from 'react';
import {View, Text, VStack} from 'native-base';
import Contexts from '../../libs/contexts';
import Loader from '../loader';

export default function MView(props) {
  return (
    <VStack alignSelf="center" mt={8} h={10} w="90%">
      <VStack>
        <Text pl={3}>{props.lable}</Text>
        <View
          borderRadius={3}
          borderWidth={0.3}
          borderColor="grey.100"
          justifyContent="center"
          paddingLeft={3}
          h={10}>
          <Text>{props.value}</Text>
        </View>
      </VStack>
    </VStack>
  );
}
