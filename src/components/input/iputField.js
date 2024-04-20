import React from 'react';
import {Input, FormControl, WarningOutlineIcon} from 'native-base';

export default function InputFields(props) {
  return (
    <FormControl
      isRequired={props.isRequired}
      // isInvalid={props.isRequired ? true : false}
      isDisabled={props.isDisabled}
      w="100%"
      mt={5}>
      <FormControl.Label>{props.lable}</FormControl.Label>
      <Input
        keyboardType={props.type}
        // onChangeText={value =>
        //   props.type === 'email-address'
        //     ? props._handleChange(value)
        //     : props._handleChange(value)
        // }
        fontSize={15}
        value={props.value}
        placeholder={props.placeholder}
        variant="underlined"
      />
      {props.isInvalid ? (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {props.errMsg}
        </FormControl.ErrorMessage>
      ) : null}
    </FormControl>
  );
}
