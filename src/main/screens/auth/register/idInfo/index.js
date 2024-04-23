import React, {useContext} from 'react';
import {View, Text, VStack, Image, ScrollView} from 'native-base';
import {Pressable} from 'react-native';
import RecordsHeader from '../../../../../components/header/records';
import UploadImage from '../../../../../components/card/uploadImage';
import front from '../../../../../components/images/idfront.png';
import back from '../../../../../components/images/idback.png';
import InputFields from '../../../../../components/input/iputField';
import SelectField from '../../../../../components/input/select';
import Alerts from '../../../../../components/alert';
// import Loader from '../../../../../components/loader';
import Context from '../../../../../libs/stateManagement/context';

export default function IdInfo() {
  const context = useContext(Context);
  const {primaryColor, secondaryColor, text} = context.colors;
  const {show, type, msg, title} = context.errorHandler;
  const {idFront, idBack, firstName, lastName, middleName, gender, ghCard} =
    context.inputFeilds;

  const mgender = [
    {label: 'MALE', value: 'MALE'},
    {label: 'FEMALE', value: 'FEMALE'},
  ];

  const _handleFront = data => {
    context._onChange({field: 'front', value: data});
  };

  const _handleBack = data => {
    context._onChange({field: 'back', value: data});
  };

  return (
    <View style={{flex: 1}}>
      <RecordsHeader title="Identity information" />
      <ScrollView>
        <VStack py={6} justifyContent="center" alignItems="center" w="100%">
          <Text mb={5} textAlign="center" fontSize={15}>
            The picture you upload must match your ID card
          </Text>
          <UploadImage local={front} source={idFront} onChange={_handleFront} />
          <Text mb={5} color={text} fontSize={15}>
            Upoad the front side of your ID card
          </Text>
          <UploadImage local={back} source={idBack} onChange={_handleBack} />
          <Text color={text} fontSize={15}>
            Upoad the back side of your ID card
          </Text>
          <Image
            source={require('../../../../../components/images/iddirection.png')}
            alt="direction"
            w="80%"
            h={100}
            resizeMode="contain"
          />
          <VStack alignItems="center" justifyContent="center" w="90%">
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'firstName', value: value})
              }
              value={firstName}
              isRequired={true}
              lable="First Name"
              placeholder="first name"
              errMsg=""
              type="default"
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'mName', value: value})
              }
              value={middleName}
              isRequired={false}
              lable="Middle Name"
              placeholder="middle name"
              errMsg=""
              type="default"
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'lastName', value: value})
              }
              value={lastName}
              isRequired={true}
              lable="Last Name"
              placeholder="last name"
              errMsg=""
              type="default"
            />
            <SelectField
              _handleChange={value =>
                context._onChange({field: 'gender', value: value})
              }
              value={gender}
              isRequired={true}
              lable="Pick Your Gender"
              data={mgender}
              errMsg=""
            />
            <InputFields
              _handleChange={value =>
                context._onChange({field: 'ghCard', value: value})
              }
              value={ghCard}
              isRequired={true}
              lable="ID card number"
              placeholder="id card number"
              errMsg=""
              type="default"
            />
            <Text fontSize={11}>please include the slashes(/)</Text>
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
                <Text>Loading</Text>
              {/* <Loader /> */}
            </View>
          ) : (
            <Pressable
              onPress={context._handleIdInfo}
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
