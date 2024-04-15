import React, {useContext} from 'react';
// import {View, Text, ScrollView, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Context from '../../../../libs/stateManagement/context';
// import RecordsHeader from '../../../../components/header/records';
// import InputFields from '../../../../components/input/iputField';
// import SelectField from '../../../../components/input/select';
// import Alerts from '../../../../components/alert';
// import Loader from '../../../../components/loader';

export default function ApplyExtension() {
  const context = useContext(Context);
  const {show, type, msg} = context.errorHandler;

  const data = [
    {label: 'MTN', value: 'mtn'},
    {label: 'VODAFONE', value: 'vodafone'},
    {label: 'AIRTELTIGO', value: 'airteltigo'},
  ];

  // let user = context.user.loan;
  // const loan = context.system.loanDetails;

  // const extFee = (parseFloat(loan.amount) / 100) * 5;

  // const tRepay = user.reAmount + extFee;

  // let date = new Date(loan.dop);

  // const repDay = date.setDate(date.getDate() + 7);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 20,
      }}>
        <Text>Extension</Text>
      {/* <RecordsHeader title="Apply extension" /> */}
      {/* <ScrollView>
        <VStack paddingBottom={10} px={4}>
          <View
            w="90%"
            mt={4}
            alignItems="center"
            alignSelf="center"
            justifyContent="center"
            display="flex">
            <InputFields
              isRequired={false}
              isInvalid={false}
              isDisabled={true}
              lable="Total days left"
              placeholder={JSON.stringify(user.days)}
            />
            <InputFields
              isRequired={false}
              isInvalid={false}
              isDisabled={true}
              lable="Extension handling fee(5% of borrowed amount)GHS"
              placeholder={JSON.stringify(extFee)}
            />
            <InputFields
              isRequired={false}
              isInvalid={false}
              isDisabled={true}
              lable="Total repayment amount"
              placeholder={JSON.stringify(tRepay)}
            />
            <InputFields
              isRequired={false}
              isInvalid={false}
              isDisabled={true}
              lable="New payment date"
              placeholder={new Date(repDay).toLocaleDateString()}
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
                : () => context._applyExt({extFee, tRepay, repDay, id: loan.ID})
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
              <Text style={{fontWeight: 'bold'}}>Pay and Apply</Text>
            )}
          </TouchableOpacity>
        </VStack>
      </ScrollView> */}
    </View>
  );
}
