import React, {useContext} from 'react';
import {View, Text, ScrollView, Checkbox, HStack} from 'native-base';
import {Pressable} from 'react-native';
import Contexts from '../../../libs/contexts';
import RecordsHeader from '../../../components/header/records';
import LoanCard from '../../../components/card/loanAmount';
import InputFields from '../../../components/input/iputField';
import SelectField from '../../../components/input/select';
import Icon from 'react-native-vector-icons/Ionicons';
import {_calcInterest} from '../../../libs/functions/interests';
import MView from '../../../components/input/mView';
import Loader from '../../../components/loader';
import Alerts from '../../../components/alert';

export default function GetLoan() {
  const context = useContext(Contexts);
  const {primaryColor, myGrey, secondaryColor} = context.colors;
  const {loanAmount, paymentMethod, loanRepaymentPeriod, wHeard, useLoan} =
    context.newLoan;
  const {interestRate, loading} = context.system;
  const {show, type, msg} = context.errorHandler;

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
      }}>
      <RecordsHeader title="Apply for a loan" />
      <ScrollView>
        <View justifyContent="center" alignItems="center">
          {context.user === null ? (
            <View mt={6}>
              <Text>Please make sure you are connected to the internet</Text>
            </View>
          ) : (
            <>
              <LoanCard />
              {loanAmount <= 300 ? (
                <MView
                  lable="Loan repayment period"
                  value={loanRepaymentPeriod}
                />
              ) : (
                <View w="90%">
                  <SelectField
                    isRequired={false}
                    isInvalid={false}
                    value={loanRepaymentPeriod}
                    _handleChange={data => {
                      context._onChange({
                        field: 'repaymentPeriod',
                        value: data,
                      });
                    }}
                    lable="Choose repayment period"
                    data={period}
                  />
                </View>
              )}
              <MView
                lable="Loan interest rate"
                value={
                  loanAmount <= 300
                    ? interestRate.high + '% interest rate'
                    : interestRate.low + '% interest rate'
                }
              />
              <MView
                lable="Total repayment amount"
                value={
                  loanAmount <= 300
                    ? _calcInterest({
                        rate: interestRate.high,
                        amount: loanAmount,
                      })
                    : _calcInterest({
                        rate: interestRate.low,
                        amount: loanAmount,
                      })
                }
              />
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
                    borderWidth: 1,
                    borderColor: myGrey,
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
                    <Icon name="md-chevron-forward-circle-outline" size={30} />
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
              {show ? (
                <Alerts type={type} msg={msg} onClose={context._toggleError} />
              ) : null}

              <Pressable
                onPress={context._handleLoan1}
                style={{
                  marginVertical: 30,
                  backgroundColor: primaryColor,
                  borderWidth: 1,
                  borderColor: myGrey,
                  height: 50,
                  width: '80%',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 7,
                }}>
                <HStack
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center">
                  <Text color={secondaryColor} fontWeight="bold" fontSize={18}>
                    Next step
                  </Text>
                  <Icon name="md-chevron-forward-circle-outline" size={30} />
                </HStack>
              </Pressable>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
