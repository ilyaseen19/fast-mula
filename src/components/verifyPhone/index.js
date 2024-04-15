import React, {useContext, useEffect} from 'react';
import {View, Text, VStack, HStack, Input} from 'native-base';
import {Pressable} from 'react-native';
import Contexts from '../../libs/contexts';
import Alerts from '../alert';
import auth from '@react-native-firebase/auth';
import Loader from '../loader';

const Auth = auth();

export default function VerifyOtp() {
  const context = useContext(Contexts);
  const {primaryColor, secondaryColor, white} = context.colors;
  const {phone, code} = context.inputFeilds;
  const {loading} = context.system;
  const {show, title, msg, type} = context.errorHandler;

  useEffect(() => {
    Auth.onAuthStateChanged(user => {
      if (user !== null && !user.isAnonymous) {
        context.autoVerify();
      } else null;
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: primaryColor,
      }}>
      <VStack h="100%" w="100%">
        <VStack h="80%" w="100%" justifyContent="center" alignItems="center">
          <Text fontSize={22} fontWeight="bold" color={secondaryColor}>
            Please enter the SMS{' '}
          </Text>
          <Text fontSize={20} fontWeight="bold" color={secondaryColor}>
            verification code
          </Text>
          <Text mt={5} fontSize={15} color={secondaryColor}>
            A verification code has been sent to{' '}
          </Text>
          <Text alignSelf="center" fontSize={15} color={secondaryColor}>
            this number +260{' ' + phone}
          </Text>
          <Input
            variant="underlined"
            w="70%"
            mt={10}
            keyboardType="number-pad"
            textAlign="center"
            value={code}
            padding={0}
            color={"#ccc"}
            fontSize={20}
            borderBottomColor={secondaryColor}
            onChangeText={code =>
              context._onChange({field: 'code', value: code})
            }
            maxLength={6}
            letterSpacing={10}
          />
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
              mt={25}
              w="70%"
              bg={secondaryColor}
              color={primaryColor}
              style={{
                width: '80%',
                backgroundColor: secondaryColor,
                borderRadius: 10,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
              }}
              onPress={context._verifyPhone}
              >
              <Text fontSize={18} color={primaryColor}>
                Verify
              </Text>
            </Pressable>
          )}
        </VStack>
        {show ? (
          <Alerts
            title={title}
            msg={msg}
            type={type}
            onClose={context._toggleError}
          />
        ) : null}
        <HStack h="20%" w="100%" bg={white} borderTopLeftRadius={190}></HStack>
      </VStack>
    </View>
  );
}
