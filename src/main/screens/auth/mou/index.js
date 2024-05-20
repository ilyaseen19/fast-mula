import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {VStack, View, Text, ScrollView, Center} from 'native-base';
import colors from '../../../../components/colors';
import InputFields from '../../../../components/input/iputField';
import SelectField from '../../../../components/input/select';
import UploadImage from '../../../../components/card/uploadImage';
import DatePicker from '../../../../components/input/datePicker';
const cardFront = require('../../../../components/images/idfront.png');
const cardBack = require('../../../../components/images/idback.png');

export default function MouPage() {
  const {container} = styles;

  var today = new Date();
  const eighteenYearsAgo = today.setFullYear(today.getFullYear() - 18);

  const [date, setDate] = React.useState(new Date(eighteenYearsAgo));

  const data = [
    {value: 'company 1', lable: 'company 1'},
    {value: 'company 2', lable: 'company 2'},
    {value: 'company 3', lable: 'company 3'},
    {value: 'company 4', lable: 'company 4'},
  ];

  return (
    <View style={container}>
      <VStack
        overflow="hidden"
        h="99%"
        w="100%"
        borderTopRadius={50}
        mt="auto"
        pt={15}
        px={10}
        justifyContent="center"
        alignItems="center"
        bg={colors.secondaryColor}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <InputFields
            isRequired={true}
            value=""
            isDisabled={false}
            lable="First Name "
            placeholder="first name"
            type="default"
          />
          <InputFields
            isRequired={true}
            value=""
            isDisabled={false}
            lable="Last Name "
            placeholder="last name"
            type="default"
          />
          <DatePicker
            date={date}
            lable="Date Of Birth"
            isRequired={true}
            isInvalid={false}
            errMsg=""
            _onChange={value => setDate(value)}
            placeholder="Please enter your date of birth"
          />
          <InputFields
            isRequired={true}
            value=""
            isDisabled={false}
            lable="NRC Number "
            placeholder="nrc number"
            type="default"
          />
          <UploadImage
            lable="Upload The Front Side Of Your NRC"
            onChange={() => {}}
            source={null}
            local={cardFront}
          />
          <UploadImage
            lable="Upload The Back Side Of Your NRC"
            onChange={() => {}}
            source={null}
            local={cardBack}
          />
          <InputFields
            isRequired={true}
            value=""
            isDisabled={false}
            lable="Enter Your Employee/Company ID Number "
            placeholder="Employee ID Number"
            type="default"
          />
          <SelectField
            lable="Select Your Organisation"
            isRequired={true}
            value=""
            data={data}
          />
          <Center mt={5}>
            <Pressable
              onPress={() => {}}
              style={{
                backgroundColor: colors.primaryColor,
                borderRadius: 15,
                width: '50%',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <Text fontSize={15} fontWeight="bold">
                Submit
              </Text>
            </Pressable>
          </Center>
        </ScrollView>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
  },
});
