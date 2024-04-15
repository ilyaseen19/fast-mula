import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ContatctSelectField(props) {
  return (
    <View>
      <View style={{marginTop: 15, display: 'flex', flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold'}}>{props.lable} </Text>
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
        defaultButtonText={props.lable}
        buttonTextStyle={{textAlign: 'left', color: 'grey'}}
        data={props.data}
        onSelect={(selectedItem, index) => {
          props._handleChange(selectedItem.number);
        }}
        rowTextStyle={{color: 'grey'}}
        dropdownStyle={{borderRadius: 8}}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.name;
        }}
        rowTextForSelection={(item, index) => {
          return item.name;
        }}
      />
    </View>
  );
}
