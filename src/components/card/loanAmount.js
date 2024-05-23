import React, {useContext} from 'react';
import {View, Text, HStack, Input} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import Loader from '../loader';
import Context from '../../libs/stateManagement/context';
import InputFields from '../input/iputField';

export default function LoanCard() {
  const context = useContext(Context);
  const {secondaryColor, text, myGrey, danger, primaryColor} = context.colors;
  const {level} = context.user !== null ? context.user : '';
  const {loading, loanAmount} = context;

  return (
    <View
      alignSelf="center"
      alignItems="center"
      justifyContent="center"
      mt={6}
      h={130}
      // borderRadius={10}
      bg={secondaryColor}
      // shadow={1}
      w="90%">
      {loading ? (
        <View alignSelf="center">
          <Loader />
          <Text>Loading user data please wait</Text>
        </View>
      ) : (
        <>
          <Text color={primaryColor} fontSize={18} fontWeight="bold">
            Enter loan amount
          </Text>
          <Input
            variant="underlined"
            size={15}
            width={150}
            color={primaryColor}
            textAlign="center"
            keyboardType="number-pad"
          />
        </>
      )}
    </View>
  );
}

// <HStack justifyContent="center" alignItems="center">
//               <Pressable
//                 onPress={() =>
//                   context._onChange({
//                     field: 'loanAmount-minus',
//                     value: loanAmount,
//                   })
//                 }
//                 style={{
//                   padding: 5,
//                   margin: 3,
//                   width: 50,
//                   height: 50,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <Icon name="chevron-back-circle" color={secondaryColor} size={30} />
//               </Pressable>
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: '40%',
//                 height: 50,
//               }}>
//               <Text fontSize={25} fontWeight="bold">
//                 {loanAmount}
//               </Text>
//             </View>
//               <Pressable
//                 onPress={() =>
//                   context._onChange({
//                     field: 'loanAmount-plus',
//                     value: loanAmount,
//                   })
//                 }
//                 style={{
//                   padding: 5,
//                   margin: 3,
//                   width: 50,
//                   height: 50,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <Icon
//                   name="chevron-forward-circle"
//                   color={secondaryColor}
//                   size={30}
//                 />
//               </Pressable>
//           </HStack>
