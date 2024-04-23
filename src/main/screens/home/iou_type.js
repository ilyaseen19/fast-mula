import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {VStack, View, Text, Image, ScrollView, Divider} from 'native-base';
import colors, { primaryColor } from '../../../components/colors';
import Context from '../../../libs/stateManagement/context';

export default function IouType() {
    const context = React.useContext(Context)
  const {container} = styles;


    return (<View style={container}>
        <VStack
          overflow="hidden"
          h="99%"
          w="100%"
          borderTopRadius={50}
          mt="auto"
          pt={15}
          px={15}
          justifyContent="center"
          alignItems="center"
          bg={colors.secondaryColor}>
            <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <VStack justifyContent="center" alignItems="center">
                <Image alignSelf="center" size={200} alt='review' source={require("../../../components/images/secure_loan.png")} />
                <Text color={primaryColor} fontWeight="bold" fontSize={15} textAlign="center">Does your company have an MOU wit Fast Mula? Access Cheaper Loans</Text>
                <Pressable onPress={() => context._routeToPage("Mou_page")} style={{backgroundColor: primaryColor, borderRadius: 15, width: "50%", height: 40, justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
                    <Text fontSize={15} fontWeight="bold">Start</Text>
                </Pressable>
            </VStack>
            <Divider mt={3} />
            <VStack justifyContent="center" alignItems="center">
                <Image alignSelf="center" size={250} alt='review' source={require("../../../components/images/unsecured.png")} />
                <Text color={primaryColor} fontWeight="bold" fontSize={15} textAlign="center">An individual and need an instant loan ? Provide your details and apply now!!</Text>
                <Pressable onPress={() => context._routeToPage("Register")} style={{backgroundColor: primaryColor, borderRadius: 15, width: "50%", height: 40, justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
                    <Text fontSize={15} fontWeight="bold">Start</Text>
                </Pressable>
            </VStack>
            </ScrollView>
        </VStack>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
  },
});
