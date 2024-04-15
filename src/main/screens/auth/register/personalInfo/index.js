import React, {useContext} from 'react';
import {View, Text, VStack, ScrollView} from 'native-base';
import {Pressable} from 'react-native';
import contexts from '../../../../../libs/contexts';
import RecordsHeader from '../../../../../components/header/records';
import InputFields from '../../../../../components/input/iputField';
import SelectField from '../../../../../components/input/select';
import DatePicker from '../../../../../components/input/datePicker';
import Alerts from '../../../../../components/alert';
import Loader from '../../../../../components/loader';

export default function PesonalInfo() {
  const context = useContext(contexts);
  const {primaryColor, secondaryColor} = context.colors;
  const {show, type, msg, title} = context.errorHandler;
  const {
    dob,
    inSchool,
    eduLevel,
    resiType,
    digAddressResi,
    areaResi,
    lnmkResi,
    resiTime,
    incomeSource,
    nRelCare,
    email,
    bPhone,
    mStatus,
  } = context.inputFeilds;

  const school = [
    {label: 'YES', value: 'Yes'},
    {label: 'NO', value: 'No'},
  ];

  const education = [
    {label: 'GRADE 12', value: 'Grade 12'},
    {label: 'SECONDARY', value: 'Secondary'},
    {label: 'TERTIARY', value: 'Tertiary'},
  ];

  const residency = [
    {label: 'OWNED', value: 'OWNED'},
    {label: 'RENTED', value: 'RENTED'},
  ];

  const income = [
    {label: 'PARENTS', value: 'PARENTS'},
    {label: 'GUARDIAN', value: 'GUARDIAN'},
    {label: 'JOB', value: 'JOB'},
  ];

  const marital = [
    {label: 'MARIED', value: 'MARIED'},
    {label: 'SINGLE', value: 'SINGLE'},
    {label: 'DIVORCED', value: 'DIVORCED'},
    {label: 'WIDOWED', value: 'WIDOWED'},
  ];

  const relativesNumber = [
    {label: '1 - 5', value: '1 -5'},
    {label: '5 - 8', value: '5 - 8'},
    {label: '8 - 10', value: '8 - 10'},
    {label: '10+', value: '10+'},
  ];

  const _handleShow = () => {
    context._setDialog();
  };

  const _handleChange = selectedDate => {
    const date = selectedDate.nativeEvent.timestamp;
    const value = new Date(date);
    context._setDialog();
    context._onChange({field: 'dob', value});
  };

  return (
    <View style={{flex: 1}}>
      <RecordsHeader title="Pesonal information" />
      <ScrollView>
        <VStack py={6} justifyContent="center" alignItems="center" w="100%">
          <VStack justifyContent="space-around" w="80%">
            <DatePicker
              setStatus={_handleShow}
              date={dob}
              onChange={_handleChange}
              show={context.dialog}
              errMsg=""
            />
            <SelectField
              _handleChange={value =>
                context._onChange({field: 'inSchool', value: value})
              }
              value={inSchool}
              isRequired={true}
              lable="Are you still in school"
              data={school}
              errMsg=""
            />
            <SelectField
              _handleChange={value =>
                context._onChange({field: 'eduLevel', value: value})
              }
              value={eduLevel}
              isRequired={true}
              lable="Educational level"
              data={education}
              errMsg=""
            />
            <SelectField
              _handleChange={value =>
                context._onChange({field: 'resiType', value: value})
              }
              value={resiType}
              isRequired={true}
              lable="Chose type of residency"
              data={residency}
              errMsg=""
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'digAddRes', value: value})
              }
              value={digAddressResi}
              isRequired={true}
              lable="Address of residence"
              placeholder="Address"
              errMsg=""
              type="default"
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'areaResi', value: value})
              }
              value={areaResi}
              isRequired={true}
              lable="Name of Area/Locality of residence"
              placeholder="area or locality"
              errMsg=""
              type="default"
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'lnmkResi', value: value})
              }
              value={lnmkResi}
              isRequired={true}
              lable="Land mark near residence"
              placeholder="enter a land mark in area or locality"
              errMsg=""
              type="default"
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'resiTime', value: value})
              }
              value={resiTime}
              type="number-pad"
              isRequired={true}
              lable="Residence time(years)"
              placeholder="how long have you been staying there"
              errMsg=""
            />
            <SelectField
              _handleChange={value =>
                context._onChange({field: 'incSource', value: value})
              }
              value={incomeSource}
              isRequired={true}
              lable="Source of income"
              data={income}
              errMsg=""
            />
            <SelectField
              _handleChange={value =>
                context._onChange({field: 'mStatus', value: value})
              }
              value={mStatus}
              isRequired={true}
              lable="Marital status"
              data={marital}
              errMsg=""
            />
            <SelectField
              _handleChange={value =>
                context._onChange({field: 'nRel', value: value})
              }
              value={nRelCare}
              lable="Relatives in need of care"
              data={relativesNumber}
              errMsg=""
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'email', value: value})
              }
              value={email}
              type="email-address"
              isRequired={true}
              lable="Valid email address"
              placeholder="Email that can be contacted"
              isInvalid={false}
              errMsg=""
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'bPhone', value: value})
              }
              value={bPhone}
              type="number-pad"
              isRequired={false}
              lable="Backup phone number"
              placeholder="Backup phone number"
              isInvalid={false}
              errMsg=""
            />
          </VStack>
          {show ? (
            <Alerts
              show={show}
              title={title}
              msg={msg}
              type={type}
              onClose={context._toggleError}
            />
          ) : null}
          {context.system.loading ? (
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
              onPress={context._handlePesInfo}
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
                Next
              </Text>
            </Pressable>
          )}
        </VStack>
      </ScrollView>
    </View>
  );
}
