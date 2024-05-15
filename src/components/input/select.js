import React from 'react';
import { Select, CheckIcon, FormControl, Center, WarningOutlineIcon} from 'native-base';

export default function SelectField(props) {
  const [service, setService] = React.useState("");
  return (
      <FormControl mt={5} w="100%" isRequired={props.isRequired} isInvalid={props.isSubmitted && props.value === "" ? true : false}>
        <FormControl.Label>{props.lable}</FormControl.Label>
        <Select variant='underlined' placeholder={props.lable} _selectedItem={{
        endIcon: <CheckIcon size={5} />
      }} mt="2">
        {
          props.data.map((item, index) => {
            return<Select.Item key={index} label={item.lable} value={item.value}/>
          })
        }
        </Select>
        {
          props.isSubmitted && props.value === "" ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage> : null
        }
      </FormControl>
  );
}
