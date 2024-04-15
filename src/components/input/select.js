import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SelectField(props) {
  return (
    <View>
      <View style={{marginTop: 15, display: 'flex', flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', color: "#808080"}}>{props.lable} </Text>
        <Text style={{fontWeight: 'bold', color: 'red'}}>*</Text>
      </View>
      <SelectDropdown
        renderDropdownIcon={() => {
          return <Icon color="#808080" name="md-chevron-down" size={30} />;
        }}
        defaultValue={props.value}
        buttonStyle={{
          borderWidth: 1,
          borderColor: props.value === '' ? 'red' : 'grey',
          borderRadius: 5,
          marginTop: 3,
          width: '100%',
        }}
        defaultButtonText={props.value === '' ? props.label : props.value}
        buttonTextStyle={{textAlign: 'left', color: 'grey'}}
        data={props.data}
        onSelect={(selectedItem, index) => {
          props._handleChange(selectedItem.value);
        }}
        rowTextStyle={{color: 'grey'}}
        dropdownStyle={{borderRadius: 8}}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.label;
        }}
        rowTextForSelection={(item, index) => {
          return item.label;
        }}
      />
    </View>
  );
}
