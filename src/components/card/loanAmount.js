import React, {useContext} from 'react';
import {View, Text,HStack} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Contexts from '../../libs/contexts';
import {Pressable} from 'react-native';
import Loader from '../loader';

export default function LoanCard() {
  const context = useContext(Contexts);
  const {secondaryColor, text, myGrey, danger, primaryColor} = context.colors;
  const {level} = context.user !== null ? context.user : '';
  const {levels, loading} = context.system;
  const {loanAmount} = context.newLoan;

  let lv = levels.filter(lev => lev.level === level);

  return (
    <View
      alignSelf="center"
      alignItems="center"
      justifyContent="center"
      mt={6}
      h={130}
      borderRadius={10}
      bg={primaryColor}
      shadow={5}
      w="90%">
      {loading ? (
        <View alignSelf="center">
          <Loader />
          <Text>Loading user data please wait</Text>
        </View>
      ) : (
        <>
          <Text color={secondaryColor} fontSize={18} fontWeight="bold">
            Pick loan amount
          </Text>
          <Text textAlign="center" color={secondaryColor} fontSize={13} fontWeight="bold">
            level: {level}
          </Text>
          <Text textAlign="center" color={secondaryColor} fontSize={13} fontWeight="bold">
            loan limit: zmw{lv[0] !== undefined ? lv[0].limit : 0}
          </Text>
          <HStack justifyContent="center" alignItems="center">
            {loanAmount === 100 ? (
              <View
                style={{
                  padding: 5,
                  margin: 3,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="md-chevron-back-circle" color={myGrey} size={30} />
              </View>
            ) : (
              <Pressable
                onPress={() =>
                  context._onChange({
                    field: 'loanAmount-minus',
                    value: loanAmount,
                  })
                }
                style={{
                  padding: 5,
                  margin: 3,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="md-chevron-back-circle" color={danger} size={30} />
              </Pressable>
            )}
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '40%',
                height: 50,
              }}>
              <Text fontSize={25} fontWeight="bold">
                {loanAmount}
              </Text>
            </View>
            {(lv[0] !== undefined && loanAmount < lv[0].limit) ||
            (lv[0] !== undefined && lv[0].level >= '9') ? (
              <Pressable
                onPress={() =>
                  context._onChange({
                    field: 'loanAmount-plus',
                    value: loanAmount,
                  })
                }
                style={{
                  padding: 5,
                  margin: 3,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="md-chevron-forward-circle"
                  color={danger}
                  size={30}
                />
              </Pressable>
            ) : (
              <View
                style={{
                  padding: 5,
                  margin: 3,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="md-chevron-forward-circle"
                  color={myGrey}
                  size={30}
                />
              </View>
            )}
          </HStack>
        </>
      )}
    </View>
  );
}
