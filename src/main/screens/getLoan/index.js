import React, {useContext} from 'react';
import {View, Text, ScrollView, Checkbox, HStack, VStack} from 'native-base';
import {Pressable} from 'react-native';
import RecordsHeader from '../../../components/header/records';
import LoanCard from '../../../components/card/loanAmount';
import InputFields from '../../../components/input/iputField';
import SelectField from '../../../components/input/select';
import Icon from 'react-native-vector-icons/Ionicons';
import MView from '../../../components/input/mView';
import Loader from '../../../components/loader';
// import Alerts from '../../../components/alert';
import Context from '../../../libs/stateManagement/context';
import {_calcInterest} from '../../../libs/functions/interests';
import {Image} from 'react-native-svg';

export default function GetLoan() {
  const context = useContext(Context);
  const {primaryColor, myGrey, secondaryColor} = context.colors;
  const {paymentMethod, loanRepaymentPeriod, wHeard, useLoan} =
    context.inputFeilds;
  const {interestRate, loading, loanAmount} = context;
  // const {show, type, msg} = context.errorHandler;

  const period = [
    {label: '8 days', value: '8 days'},
    {label: '9 days', value: '9 days'},
    {label: '10 days', value: '10 days'},
    {label: '11 days', value: '11 days'},
    {label: '12 days', value: '12 days'},
    {label: '13 days', value: '13 days'},
    {label: '14 days', value: '14 days'},
    {label: '15 days', value: '15 days'},
  ];

  const whereData = [
    {label: 'Facebook', value: 'facebook'},
    {label: 'Twitter', value: 'twitter'},
    {label: 'Whatsapp', value: 'whatsapp'},
    {label: 'Friend', value: 'friend'},
    {label: 'Television add', value: 'television'},
    {label: 'Radio', value: 'Radio'},
    {label: 'Other', value: 'other'},
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 20,
        backgroundColor: secondaryColor,
      }}>
      <RecordsHeader title="Apply for a loan" />
      <ScrollView>
        <View justifyContent="center" alignItems="center">
          {context.user === null || !context.user.isRegistered ? (
            <Text>Make sure you are connected to the Internet or Registered</Text>
          ) : (
            <>
              <LoanCard />

              <VStack width="100%">
                <HStack width="100%" justifyContent="space-around" mt={5}>
                  <VStack
                    alignItems="center"
                    borderColor={primaryColor}
                    borderWidth={0.5}
                    borderRadius={10}
                    p={3}
                    width="40%">
                    <Icon name="time-outline" color={primaryColor} size={30} />
                    <Text fontSize={13} fontWeight="bold" color={primaryColor}>
                      7 days
                    </Text>
                    <Text fontSize={13} color={primaryColor}>
                      Paymen Period
                    </Text>
                  </VStack>
                  <VStack
                    alignItems="center"
                    borderColor={primaryColor}
                    borderWidth={0.5}
                    borderRadius={10}
                    p={3}
                    width="40%">
                    <Icon
                      name="stats-chart-outline"
                      color={primaryColor}
                      size={30}
                    />
                    <Text fontSize={15} fontWeight="bold" color={primaryColor}>
                      23%
                    </Text>
                    <Text fontSize={13} color={primaryColor}>
                      Interest Rate
                    </Text>
                  </VStack>
                </HStack>
                <HStack width="100%" justifyContent="space-around" mt={5}>
                  <VStack
                    alignItems="center"
                    borderColor={primaryColor}
                    borderWidth={0.5}
                    borderRadius={10}
                    p={3}
                    width="40%">
                    <Icon name="cash-outline" color={primaryColor} size={30} />
                    <Text fontSize={13} fontWeight="bold" color={primaryColor}>
                      KW 500
                    </Text>
                    <Text fontSize={13} color={primaryColor}>
                      Loan Amount
                    </Text>
                  </VStack>
                  <VStack
                    alignItems="center"
                    borderColor={primaryColor}
                    borderWidth={0.5}
                    borderRadius={10}
                    p={3}
                    width="40%">
                    <Icon
                      name="receipt-outline"
                      color={primaryColor}
                      size={30}
                    />
                    <Text fontSize={15} fontWeight="bold" color={primaryColor}>
                      KW 700
                    </Text>
                    <Text fontSize={13} color={primaryColor}>
                      Payment Amount
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
              <View w="90%" mt={4}>
                <InputFields
                  isRequired={false}
                  isInvalid={false}
                  isDisabled={false}
                  value={useLoan}
                  _handleChange={value =>
                    context._onChange({field: 'useLoan', value})
                  }
                  lable="Use of loan"
                  placeholder="what will the loan be used for"
                />
                <Pressable
                  onPress={() => context._routeToPage('Payment_method')}
                  style={{
                    marginTop: 20,
                    borderWidth: 0.5,
                    borderColor: primaryColor,
                    height: 50,
                    width: '100%',
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 3,
                  }}>
                  <HStack
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingHorizontal={7}>
                    {paymentMethod === undefined || paymentMethod === '' ? (
                      <Text>Select payment method</Text>
                    ) : (
                      <Text fontSize={15}>{paymentMethod}</Text>
                    )}
                    <Icon
                      color={primaryColor}
                      name="chevron-forward-circle-outline"
                      size={30}
                    />
                  </HStack>
                </Pressable>

                <SelectField
                  isRequired={false}
                  isInvalid={false}
                  value={wHeard}
                  _handleChange={data => {
                    context._onChange({
                      field: 'wheard',
                      value: data,
                    });
                  }}
                  lable="Where did you hear about Perficient Loans"
                  data={whereData}
                />
              </View>
              {/* {show ? (
                <Alerts type={type} msg={msg} onClose={context._toggleError} />
              ) : null} */}

              <Pressable
                // onPress={context._handleLoan1}
                onPress={() => context._routeToPage('Verify_pic')}
                style={{
                  marginVertical: 30,
                  backgroundColor: secondaryColor,
                  borderWidth: 1,
                  borderColor: primaryColor,
                  height: 40,
                  width: '60%',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 7,
                }}>
                <HStack
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center">
                  <Text color={primaryColor} fontWeight="bold" fontSize={18}>
                    Next step
                  </Text>
                  <Icon
                    color={primaryColor}
                    name="chevron-forward-circle-outline"
                    size={30}
                  />
                </HStack>
              </Pressable>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
