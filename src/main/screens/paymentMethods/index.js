import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  VStack,
  Image,
  HStack,
  Radio,
  Divider,
  Center,
} from 'native-base';
import RecordsHeader from '../../../components/header/records';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import Context from '../../../libs/stateManagement/context';

export default function PaymentMethod() {
  const context = useContext(Context);
  const {paymentMethods, loan} = context.user;
  const {text, primaryColor, secondaryColor, myGrey} = context.colors;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: secondaryColor,
      }}>
      <RecordsHeader title="Payment methods" />
      <ScrollView>
          {paymentMethods !== undefined && paymentMethods.length !== 0 ? (
            <>
              <HStack w="100%">
                <Radio.Group
                  alignSelf="center"
                  name="myRadioGroup"
                  accessibilityLabel="selected contact"
                  value={context.newLoan.paymentMethod}
                  onChange={nextValue => {
                    context._onChange({
                      field: 'selectedContact',
                      value: nextValue,
                    });
                  }}>
                  {paymentMethods.map((paym, index) => {
                    return (
                      <View key={index}>
                        <Radio
                          accessibilityLabel="selected contact"
                          value={paym.method}
                          my={1}>
                          <VStack>
                            <Text fontSize={17} fontWeight="bold">
                              {paym.method}
                            </Text>
                            <Text color={text}>{paym.operator}</Text>
                          </VStack>
                        </Radio>
                        <Divider mt={3} bgColor={text} />
                      </View>
                    );
                  })}
                </Radio.Group>
              </HStack>
              <VStack w="100%" justifyContent="center" alignItems="center">
                {loan.isApplied && loan.paymentStatus === 'Not payed' ? null : (
                  <Pressable
                    onPress={context._confirmSelected}
                    style={{
                      marginTop: 30,
                      backgroundColor: primaryColor,
                      height: 50,
                      width: '50%',
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <HStack
                      w="100%"
                      justifyContent="center"
                      alignItems="center">
                      <Text
                        color={secondaryColor}
                        fontWeight="bold"
                        fontSize={15}>
                        Confirm selected
                      </Text>
                    </HStack>
                  </Pressable>
                )}
                {paymentMethods.length >= 3 ? null : (
                  <Pressable
                    onPress={() => context._routeToPage('Add_payment_method')}
                    style={{
                      marginVertical: 30,
                      borderWidth: 1,
                      borderColor: {primaryColor},
                      height: 50,
                      width: '30%',
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <HStack
                      w="100%"
                      justifyContent="center"
                      alignItems="center">
                      <Icon
                        name="md-add-circle-outline"
                        size={30}
                        color={primaryColor}
                      />
                    </HStack>
                  </Pressable>
                )}
              </VStack>
            </>
          ) : (
            <Center
             flex={1}
              display="flex">
              <Image
                alt="svg"
                mt={10}
                w={200}
                h={200}
                source={require('../../../components/images/wallet.png')}
              />
              <Text textAlign="center">No payment method added yet</Text>
              <Text textAlign="center" color={primaryColor} mt={2} fontSize={13}>
                Payment methods are mobile money contacts
              </Text>
              <Text textAlign="center" color={text} fontSize={13}>
                {' '}
                that you will recieve your loan on!
              </Text>
              <Pressable
                onPress={() => context._routeToPage('Add_payment_method')}
                style={{
                  marginVertical: 30,
                  backgroundColor: primaryColor,
                  borderWidth: 1,
                  borderColor: myGrey,
                  height: 40,
                  width: '50%',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 5,
                }}>
                <HStack w="100%" justifyContent="center" alignItems="center">
                  <Text
                    color={secondaryColor}
                    mr={3}
                    fontWeight="bold"
                    fontSize={15}>
                    Add one
                  </Text>
                  <Icon name="add-circle-outline" size={25} />
                </HStack>
              </Pressable>
            </Center>
          )}
      </ScrollView>
    </View>
  );
}
