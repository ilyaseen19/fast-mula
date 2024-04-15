import React, {useContext} from 'react';
import {View, Text, ScrollView, VStack, HStack} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Contexts from '../../libs/contexts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loader from '../loader';

export default function InfoView(props) {
  const context = useContext(Contexts);
  const {primaryColor, secondaryColor, text, myGrey, danger} = context.colors;

  return (
    <View alignSelf="center" mt={2} w="95%">
      <VStack>
        <Text pl={3}>{props.lable}</Text>
        <View
          borderRadius={5}
          borderWidth={0.3}
          borderColor="grey.100"
          justifyContent="center"
          paddingLeft={3}
          h={10}>
          <Text>{props.value}</Text>
        </View>
      </VStack>
    </View>
  );
}
