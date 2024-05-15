import React, {useContext, useEffect} from 'react';
import {View, Text, VStack, ScrollView} from 'native-base';
import {Pressable} from 'react-native';
import RecordsHeader from '../../../../../components/header/records';
import SelectField from '../../../../../components/input/select';
import Loader from '../../../../../components/loader';
import Alerts from '../../../../../components/alert';
import ContatctSelectField from '../../../../../components/input/contact-select';
import Context from '../../../../../libs/stateManagement/context';

export default function EmergencyContact() {
  const context = useContext(Context);
  const {primaryColor, secondaryColor, myGrey, text} = context.colors;
  const {emergContacts} = context.inputFeilds;
  const {loading, contacts} = context.user;
  // const {type, show, msg} = context.errorHandler;

  useEffect(() => {
    context._getContacts();
  }, []);

  const education = [
    {lable: 'GRADE 12', value: 'Grade 12'},
    {lable: 'SECONDARY', value: 'Secondary'},
    {lable: 'TERTIARY', value: 'Tertiary'},
  ];

  const relationship = [
    {lable: 'PARENT', value: 'Parent'},
    {lable: 'SIBLIN', value: 'Siblin'},
    {lable: 'FRIEND', value: 'Friend'},
    {lable: 'SPOUSE', value: 'Spouse'},
  ];

  const _renderContent = () => {
    return (
      <View
        style={{
          width: '100%',
          padding: 5,
        }}>
        <ContatctSelectField
          isRequired={true}
          value={emergContacts.contact1.name}
          _handleChange={data => {
            var con = contacts.filter(contact => contact.number === data);
            context._onChange({
              field: 'emgCont',
              value: con[0],
              type: 1,
              ft: 'con',
            });
          }}
          lable="Select contact"
          title="contacts"
          data={contacts}
          errMsg=""
        />

        <SelectField
          isRequired={true}
          value={emergContacts.contact1.eduLevel}
          _handleChange={data => {
            context._onChange({
              field: 'emgCont',
              value: data,
              type: 1,
              ft: 'edu',
            });
          }}
          lable="Educational level"
          data={education}
          errMsg=""
        />

        <SelectField
          value={emergContacts.contact1.rele}
          _handleChange={data => {
            context._onChange({
              field: 'emgCont',
              value: data,
              type: 1,
              ft: 'rel',
            });
          }}
          isRequired={true}
          lable="Relationship"
          data={relationship}
          errMsg=""
        />
      </View>
    );
  };

  const _renderContent2 = () => {
    return (
      <View
        style={{
          width: '100%',
          padding: 5,
        }}>
        <ContatctSelectField
          value={emergContacts.contact2.name}
          _handleChange={data => {
            var con = contacts.filter(contact => contact.number === data);
            context._onChange({
              field: 'emgCont',
              value: con[0],
              type: 2,
              ft: 'con',
            });
          }}
          isRequired={true}
          title="contacts"
          lable="Select contact"
          data={contacts}
          errMsg=""
        />

        <SelectField
          value={emergContacts.contact2.eduLevel}
          _handleChange={data => {
            context._onChange({
              field: 'emgCont',
              value: data,
              type: 2,
              ft: 'edu',
            });
          }}
          isRequired={true}
          lable="Educational level"
          data={education}
          errMsg=""
        />

        <SelectField
          value={emergContacts.contact2.rele}
          _handleChange={data => {
            context._onChange({
              field: 'emgCont',
              value: data,
              type: 2,
              ft: 'rel',
            });
          }}
          isRequired={true}
          lable="Relationship"
          data={relationship}
          errMsg=""
        />
      </View>
    );
  };

  const _renderContent3 = () => {
    return (
      <View
        style={{
          width: '100%',
          padding: 5,
        }}>
        <ContatctSelectField
          value={emergContacts.contact3.name}
          _handleChange={data => {
            var con = contacts.filter(contact => contact.number === data);
            context._onChange({
              field: 'emgCont',
              value: con[0],
              type: 3,
              ft: 'con',
            });
          }}
          isRequired={true}
          lable="Select contact"
          title="contacts"
          data={contacts}
          errMsg=""
        />

        <SelectField
          value={emergContacts.contact3.eduLevel}
          _handleChange={data => {
            context._onChange({
              field: 'emgCont',
              value: data,
              type: 3,
              ft: 'edu',
            });
          }}
          isRequired={true}
          lable="Educational level"
          data={education}
          errMsg=""
        />

        <SelectField
          value={emergContacts.contact3.rele}
          _handleChange={data => {
            context._onChange({
              field: 'emgCont',
              value: data,
              type: 3,
              ft: 'rel',
            });
          }}
          isRequired={true}
          lable="Relationship"
          data={relationship}
          errMsg=""
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: secondaryColor}}>
      <RecordsHeader title="Emergency contacts" />
      <ScrollView>
        <VStack py={6} justifyContent="center" alignItems="center" w="100%">
          <VStack justifyContent="space-around" alignItems="center" w="90%">
            <Text color={text} textAlign="center">
              The contact must include an immediate family member
            </Text>
            <Text
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: 20,
              }}>
              Emergency contact 1
            </Text>
            {_renderContent()}
            <Text
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: 20,
              }}>
              Emergency contact 2
            </Text>
            {_renderContent2()}
            <Text
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: 20,
              }}>
              Emergency contact 3
            </Text>
            {_renderContent3()}
          </VStack>
          {/* {show ? (
            <Alerts type={type} msg={msg} onClose={context._toggleError} />
          ) : null} */}
          {loading ? (
            <View
              mt={25}
              w="70%"
              bg={secondaryColor}
              disabled={true}
              color={primaryColor}>
              <Loader />
            </View>
          ) : (
            <Pressable
              onPress={loading ? null : context._handleRegister}
              style={{
                backgroundColor: primaryColor,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                width: '50%',
                height: 40,
                marginTop: 30,
              }}>
              <Text color={secondaryColor} fontWeight="bold" fontSize={16}>
                Submit
              </Text>
            </Pressable>
          )}
        </VStack>
      </ScrollView>
    </View>
  );
}
