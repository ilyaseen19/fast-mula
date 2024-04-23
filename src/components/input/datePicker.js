import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Text,
  VStack,
  Input,
  FormControl,
  WarningOutlineIcon,
  Button,
} from 'native-base';
import Icon from "react-native-vector-icons/Ionicons"
import colors from '../colors';

export default function DatePicker(props) {

  const [show, setShow] = React.useState(false);

  var today = new Date();
  const eighteenYearsAgo = today.setFullYear(today.getFullYear() - 18);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    props._onChange(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <VStack>
      <FormControl
        isRequired={props.isRequired}
        // isInvalid={props.isRequired ? true : false}
        w="100%"
        mt={5}>
        <FormControl.Label>{props.lable}</FormControl.Label>
        <Input
          type="text"
          w="100%"
          value={new Date(props.date).toLocaleDateString()}
          isReadOnly
          variant="underlined"
          InputRightElement={
            <Button
              size="xs"
              bgColor="#fff"
              rounded="none"
              w="1/6"
              h="full"
              onPress={showDatepicker}>
              <Icon name="calendar" color={colors.primaryColor} size={25} />
            </Button>
          }
          placeholder={props.placeholder}
        />
      </FormControl>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          maximumDate={new Date(eighteenYearsAgo)}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </VStack>
  );
}
