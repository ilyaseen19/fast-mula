import * as React from 'react';
import {View, ScrollView, Text, HStack, VStack, Image} from 'native-base';
import RecordsHeader from '../../../components/header/records';
import Contexts from '../../../libs/contexts';

export default function AboutUs() {
  const context = React.useContext(Contexts);
  const {primaryColor} = context.colors;
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <RecordsHeader title="About Us" />
      <ScrollView>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 5,
            width: '95%',
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}>
          <VStack
            justifyContent="center"
            alignItems="center"
            h={150}
            mt={4}
            mb={4}>
            <Image
              alt="logo"
              h={100}
              w={100}
              borderRadius={50}
              source={require('../../../components/images/logo.png')}
            />
            <Text fontWeight="bold" fontSize={15}>
              Perficient Loans
            </Text>
          </VStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Version number</Text>
            <Text fontSize={15}>V1.5.0</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>email</Text>
            <Text fontSize={15}>perficientcustomerservice@gmail.com</Text>
          </HStack>
        </View>
      </ScrollView>
    </View>
  );
}
