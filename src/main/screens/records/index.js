import * as React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import RecordsCard from '../../../components/card';
import RecordsHeader from '../../../components/header/records';
import Context from '../../../libs/stateManagement/context';
import colors from '../../../components/colors';
import {Center, Image, VStack} from 'native-base';

export default function Records() {
  const context = React.useContext(Context);
  const {container} = styles;
  const {loan} = context.user === null ? {} : context.user;

  return (
    <View style={container}>
      <RecordsHeader title="Loan records" />
      <ScrollView>
        {loan === undefined ||
        loan.loans === null ||
        loan.loans.length === 0 ? (
          <Center flex={1} alignItems="center">
            <Image
              alignSelf="center"
              size={300}
              alt="review"
              source={require('../../../components/images/no_data.png')}
            />
            <Text
              style={{
                color: colors.primaryColor,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              No records found
            </Text>
          </Center>
        ) : (
          loan.loans.map((ln, index) => {
            return <RecordsCard key={index} loan={ln} />;
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
