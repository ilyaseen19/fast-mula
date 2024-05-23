import * as React from 'react';
import {View, ScrollView, Text, HStack, VStack} from 'native-base';
import RecordsHeader from '../../../components/header/records';
import Context from '../../../libs/stateManagement/context';

export default function PrivacyPolicy() {
  const context = React.useContext(Context);
  const {primaryColor} = context.colors;
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <RecordsHeader title="Privacy policy" />
      <ScrollView>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 5,
            width: '95%',
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}>
          <Text textAlign="center" fontSize={17} fontWeight="bold" mb={5}>
            Fast Mula privacy policy
          </Text>
          <View>
            <Text fontSize={15} textAlign="center">
              policy goes here
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
