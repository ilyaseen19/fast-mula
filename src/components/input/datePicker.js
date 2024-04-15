import React from 'react';
import {TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Text,
  VStack,
  Input,
  FormControl,
  WarningOutlineIcon,
} from 'native-base';

export default function DatePicker(props) {
  //   console.log(props.date);
  const date = new Date(props.date).toLocaleDateString();

  var today = new Date();
  const eighteenYearsAgo = today.setFullYear(today.getFullYear() - 18);

  return (
    <VStack justifyContent="center" alignItems="center" w="100%" mb={5}>
      <TouchableOpacity
        onPress={props.setStatus}
        style={{
          width: '100%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FormControl
          isRequired
          isInvalid={date === new Date().toLocaleDateString() ? true : false}
          w="100%"
          mt={3}>
          <FormControl.Label>Date of birth</FormControl.Label>
          <Input isReadOnly value={date} />
          {props.isInvalid ? (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {props.errMsg}
            </FormControl.ErrorMessage>
          ) : null}
        </FormControl>
      </TouchableOpacity>
      {props.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode="date"
          maximumDate={new Date(eighteenYearsAgo)}
          is24Hour={false}
          onChange={props.onChange}
        />
      )}
    </VStack>
  );
}
