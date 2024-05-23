import React, {useContext} from 'react';
import {View, Text, ScrollView, VStack, HStack, Input} from 'native-base';
import RecordsHeader from '../../../components/header/records';
import {Pressable} from 'react-native';
import InputFields from '../../../components/input/iputField';
import SelectField from '../../../components/input/select';
import Loader from '../../../components/loader';
import Icon from 'react-native-vector-icons/Ionicons';
import Alerts from '../../../components/alert';
import Context from '../../../libs/stateManagement/context';

export default function AddPaymentMethod() {
  const context = useContext(Context);
  const {primaryColor, secondaryColor, myGrey} = context.colors;
  // const {show, msg, type} = context.errorHandler;
  const {
    paymentMethod,
    paymentEmail,
    networkOperator,
  } = context.inputFeilds;
  const {paymentVerify, loading, getOtp} = context

  const networkData = [
    {label: 'MTN', value: 'MTN'},
    {label: 'AIRTEL', value: 'AIRTEL'},
    {label: 'ZAMTEL', value: 'ZAMTEL'},
  ];

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
      }}>
      <RecordsHeader title="Add a payment method" />
      <ScrollView>
        <VStack
          alignSelf="center"
          w="90%"
          justifyContent="center"
          alignItems="center">
          <InputFields
            type="number-pad"
            isRequired={true}
            isInvalid={false}
            isDisabled={false}
            value={paymentMethod}
            _handleChange={value =>
              context._onChange({field: 'paymentMethod', value})
            }
            lable="Payment method"
            placeholder="enter your mobile money contact"
          />
          <InputFields
            isRequired={false}
            isInvalid={false}
            type="email-address"
            isDisabled={false}
            value={paymentEmail}
            _handleChange={value =>
              context._onChange({field: 'paymentEmail', value})
            }
            lable="Email address"
            placeholder="enter your email address"
          />
          <SelectField
            isRequired={true}
            isInvalid={false}
            value={networkOperator}
            _handleChange={data => {
              context._onChange({
                field: 'ntOp',
                value: data,
              });
            }}
            lable="Select network operator"
            data={networkData}
          />
          {paymentVerify ? (
            <HStack
              w="100%"
              justifyContent="center"
              alignItems="center"
              mt={8}
              borderWidth={1}
              backgroundColor="green.500"
              borderRadius={5}
              borderColor={myGrey}
              px={3}>
              <Icon
                color="white"
                name="checkmark-circle-outline"
                size={30}
              />
            </HStack>
          ) : (
            <HStack
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              mt={8}
              borderWidth={1}
              borderRadius={5}
              borderColor={myGrey}
              px={3}>
              {loading ? (
                <Text>Please wait, we are verigying your number...</Text>
              ) : (
                <>
                  {getOtp ? (
                    <>
                      <Pressable
                        onPress={context._confirmPaymentMethod}
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: 35,
                        }}>
                        <Text fontWeight="bold" color={primaryColor}>
                          Get OTP
                        </Text>
                      </Pressable>
                    </>
                  ) : (
                    <HStack alignItems="center">
                      <Pressable
                        // onPress={context._verifyPayment}
                        style={{
                          width: '50%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: 35,
                        }}>
                        <Text fontWeight="bold" color={primaryColor}>
                          Press to verify otp
                        </Text>
                      </Pressable>
                      <Input
                        variant="unstyled"
                        onChangeText={value =>
                          context._onChange({field: 'code', value})
                        }
                        w="50%"
                        fontSize={12}
                        placeholder="enter verification code"
                      />
                    </HStack>
                  )}
                </>
              )}
            </HStack>
          )}
          {/* {show ? (
            <Alerts type={type} msg={msg} onClose={context._toggleError} />
          ) : null} */}

          <Pressable
            // onPress={loading ? null : context._bindPaymentMethod}
            disabled={getOtp ? true : false}
            style={{
              width: '50%',
              height: 35,
              marginTop: 60,
              backgroundColor: primaryColor,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {loading ? (
              <Loader />
            ) : (
              <Text fontSize={18} fontWeight="bold" color={secondaryColor}>
                Bind
              </Text>
            )}
          </Pressable>
        </VStack>
      </ScrollView>
    </View>
  );
}
