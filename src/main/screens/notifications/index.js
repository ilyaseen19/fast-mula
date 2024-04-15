import React from 'react';
import {View, Text, VStack, HStack, ScrollView} from 'native-base';
import RecordsHeader from '../../../components/header/records';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Contexts from '../../../libs/contexts';

export default function UserNotifi() {
  const context = React.useContext(Contexts);
  const {myGrey, text} = context.colors;
  return (
    <View style={{flex: 1}}>
      <RecordsHeader title="Notifications" />
      <ScrollView>
        <VStack
          alignSelf="center"
          w="95%"
          borderRadius={10}
          borderWidth={1}
          borderColor={myGrey}
          mt={4}
          p={1}
          justifyContent="center">
          <HStack
            justifyContent="space-between"
            borderBottomColor={myGrey}
            borderBottomWidth={1}>
            <Text>Loan granted</Text>
            <Text>21/04/22:14:46:30</Text>
          </HStack>
          <Text
            borderBottomColor={myGrey}
            borderBottomWidth={1}
            pb={1}
            fontSize={15}
            color={text}>
            Your loan has been approved, check your payment method to confirm
          </Text>
          <View
            mt={1}
            style={{width: '100%', height: 20, alignItems: 'flex-end'}}>
            {/* if is new */}
            <View
              style={{
                backgroundColor: 'green',
                borderRadius: 50,
                width: 10,
                height: 10,
              }}></View>
            {/* if is read */}
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: myGrey,
                width: 10,
                height: 10,
              }}></View>
          </View>
        </VStack>
      </ScrollView>
    </View>
  );
}
