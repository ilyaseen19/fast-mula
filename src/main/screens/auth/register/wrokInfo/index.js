import React, {useContext} from 'react';
import {View, Text, VStack, ScrollView} from 'native-base';
import {Pressable} from 'react-native';
import contexts from '../../../../../libs/contexts';
import RecordsHeader from '../../../../../components/header/records';
import InputFields from '../../../../../components/input/iputField';
import SelectField from '../../../../../components/input/select';
import Alerts from '../../../../../components/alert';
import Loader from '../../../../../components/loader';

export default function WorkInfo() {
  const context = useContext(contexts);
  const {show, type, msg, title} = context.errorHandler;
  const {primaryColor, secondaryColor} = context.colors;
  const {
    wkUnit,
    industType,
    wkAddress,
    compAddress,
    wkLnmk,
    wkHrs,
    mthInc,
    wkContent,
  } = context.inputFeilds;

  const industry = [
    {label: 'I.T', value: 'i.t'},
    {label: 'TRADING', value: 'trading'},
    {label: 'ARTS', value: 'arts'},
    {label: 'MEDICAL', value: 'medical'},
    {label: 'DRIVING', value: 'driving'},
    {label: 'PLUMBING', value: 'plumbing'},
    {label: 'WOOD WORKING', value: 'wood working'},
    {label: 'AUTO MECHANIC', value: 'auto mehanic'},
    {label: 'MECHANICAL ENGINEER', value: 'mehanical engineer'},
    {label: 'OTHER', value: 'other'},
  ];

  return (
    <View style={{flex: 1}}>
      <RecordsHeader title="Job information" />
      <ScrollView>
        <VStack py={6} justifyContent="center" alignItems="center" w="100%">
          <VStack justifyContent="space-around" w="80%">
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'unit', value: value})
              }
              value={wkUnit}
              isRequired={true}
              lable="Company name"
              placeholder="please enter the name of the company"
              errMsg=""
              type="default"
            />
            <SelectField
              _handleChange={value =>
                context._onChange({field: 'indType', value: value})
              }
              value={industType}
              isRequired={true}
              lable="Industry type"
              data={industry}
              errMsg=""
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'wkAddress', value: value})
              }
              value={wkAddress}
              isRequired={true}
              lable="Plot/House Number"
              placeholder="please enter work address"
              errMsg=""
              type="default"
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'compAdd', value: value})
              }
              value={compAddress}
              isRequired={true}
              lable="Locality / Area of company"
              placeholder="enter the locality of the company"
              errMsg=""
              type="default"
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'wkLnmk', value: value})
              }
              value={wkLnmk}
              isRequired={true}
              lable="Work place land mark"
              placeholder="enter a land mark near company"
              errMsg=""
              type="default"
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'wkHrs', value: value})
              }
              value={wkHrs}
              isRequired={true}
              lable="Work hours"
              placeholder="enter working hours"
              errMsg=""
              type="number-pad"
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'mtInc', value: value})
              }
              value={mthInc}
              isRequired={true}
              lable="Current monthly income"
              placeholder="enter your monthly income"
              errMsg=""
              type="number-pad"
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'content', value: value})
              }
              value={wkContent}
              isRequired={true}
              lable="Position at work"
              placeholder="enter the daily work content"
              isInvalid={false}
              errMsg=""
              type="default"
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
              onPress={context._hadnleWorkInfo}
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
