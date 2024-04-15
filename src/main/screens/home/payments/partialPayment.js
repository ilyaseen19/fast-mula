import React, {useContext} from 'react';
import {View, Text, ScrollView, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Contexts from '../../../../libs/contexts';
import RecordsHeader from '../../../../components/header/records';
import MView from '../../../../components/input/mView';
import InputFields from '../../../../components/input/iputField';
import SelectField from '../../../../components/input/select';
import Alerts from '../../../../components/alert';
import Loader from '../../../../components/loader';

export default function PatialPay() {
  const context = useContext(Contexts);
  const {show, type, msg} = context.errorHandler;

  const data = [
    {label: 'MTN', value: 'mtn'},
    {label: 'VODAFONE', value: 'vodafone'},
    {label: 'AIRTELTIGO', value: 'airteltigo'},
  ];

  let loan = context.user.loan.reAmount;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 20,
      }}>
      <RecordsHeader title="Partial payment" />
      <ScrollView>
        <VStack paddingBottom={10} px={4}>
          <MView
            lable="Total repayment amount(GHS)"
            value={loan !== undefined ? loan : 0}
          />
          <View
            w="90%"
            mt={4}
            alignItems="center"
            alignSelf="center"
            justifyContent="center"
            display="flex">
            <InputFields
              isRequired={true}
              isInvalid={false}
              isDisabled={false}
              type="number-pad"
              value={context.repay.payAmount}
              _handleChange={value =>
                context._onChange({field: 'repAmount', value})
              }
              lable="Payment amount"
              placeholder="type the amount you want to pay"
            />
            <InputFields
              isRequired={true}
              isInvalid={false}
              isDisabled={false}
              type="number-pad"
              value={context.repay.paymentMethod}
              _handleChange={value =>
                context._onChange({field: 'repPh', value})
              }
              lable="Payment phone number"
              placeholder="type repayment phone number(momo)"
            />
            <InputFields
              isRequired={true}
              isInvalid={false}
              isDisabled={false}
              type="text"
              value={context.repay.accountName}
              _handleChange={value => context._onChange({field: 'actN', value})}
              lable="Momo account name"
              placeholder="type the account name"
            />
            <SelectField
              isRequired={true}
              isInvalid={false}
              value={context.repay.ntwrkOperator}
              _handleChange={data => {
                context._onChange({
                  field: 'oprt',
                  value: data,
                });
              }}
              lable="Select network operator"
              data={data}
            />
          </View>
          {show ? (
            <Alerts type={type} msg={msg} onClose={context._toggleError} />
          ) : null}
          <TouchableOpacity
            onPress={
              context.system.loading
                ? null
                : () => context._handleRepay('partial_repayment')
            }
            style={{
              alignSelf: 'center',
              width: '50%',
              marginTop: 20,
              backgroundColor: 'orange',
              borderRadius: 5,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {context.system.loading ? (
              <Loader />
            ) : (
              <Text style={{fontWeight: 'bold'}}>Pay</Text>
            )}
          </TouchableOpacity>
        </VStack>
      </ScrollView>
    </View>
  );
}
