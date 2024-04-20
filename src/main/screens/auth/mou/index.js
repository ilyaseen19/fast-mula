import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {VStack, View, Text, ScrollView, Center} from 'native-base';
import colors from '../../../../components/colors';
import InputFields from '../../../../components/input/iputField';
import SelectField from '../../../../components/input/select';
import UploadImage from '../../../../components/card/uploadImage';
const cardImage = require("../../../../components/images/idfront.png")

export default function MouPage() {
  const {container} = styles;

  const data = [
    {value: "company 1", lable: "company 1"},
    {value: "company 2", lable: "company 2"},
    {value: "company 3", lable: "company 3"},
    {value: "company 4", lable: "company 4"}
  ]

    return (<View style={container}>
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
            <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <InputFields isRequired={true} value="" isDisabled={false} lable="First Name " placeholder="first name" type="default" />
            <InputFields isRequired={true} value="" isDisabled={false} lable="Last Name " placeholder="last name" type="default" />
            <InputFields isRequired={true} value="" isDisabled={false} lable="NRC Number " placeholder="nrc number" type="default" />
            <UploadImage lable="Upload NRC" onChange={() => {}} source={null} local={cardImage}  />
            <InputFields isRequired={true} value="" isDisabled={false} lable="Enter Your Employee/Company ID Number " placeholder="Employee ID Number" type="default" />
            <SelectField lable="Select Your Organisation" isRequired={true} value="" data={data} />
            <Center mt={5}>
            <Pressable onPress={() => {}} style={{backgroundColor: colors.primaryColor, borderRadius: 15, width: "50%", height: 40, justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
              <Text fontSize={15} fontWeight="bold">Submit</Text>
            </Pressable>
            </Center>
            </ScrollView>
        </VStack>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
  },
});
