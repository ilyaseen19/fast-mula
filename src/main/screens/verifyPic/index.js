import React, {useContext, useEffect} from 'react';
import {View, Text, VStack, Image, ScrollView, Checkbox} from 'native-base';
import {Pressable, Linking} from 'react-native';
import Contexts from '../../../libs/contexts';
import RecordsHeader from '../../../components/header/records';
import selfie from '../../../components/images/selfie.png';
import SelfieImage from '../../../components/card/selfieImage';
import Loader from '../../../components/loader';
import Alerts from '../../../components/alert';

export default function VerifyPic() {
  const context = useContext(Contexts);
  const {primaryColor, secondaryColor} = context.colors;

  useEffect(() => {
    context._getLoc();
  }, []);

  return (
    <View style={{flex: 1}}>
      <RecordsHeader title="Selfie pic verification" />
      <ScrollView>
        <VStack
          py={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%">
          <Text pr={10} pl={10} mb={5} textAlign="center" fontSize={15}>
            Take a selfie(picture) and upload it, for verification purposes
          </Text>

          <SelfieImage
            local={selfie}
            source={context.newLoan.selfie}
            onChange={value =>
              context._onChange({
                field: 'selfieIm',
                value,
              })
            }
          />

          <Image
            source={require('../../../components/images/direc_2.png')}
            alt="direction"
            w="80%"
            h={100}
            resizeMode="contain"
          />

          <Checkbox
            isChecked={context.newLoan.terms}
            w="80%"
            onChange={value =>
              context._handleCheck({
                field: 'terms',
                value,
              })
            }
            value={context.system.terms}
            colorScheme="green">
            I have read and agreed to the terms and conditions
          </Checkbox>

          <Pressable
            onPress={() => {
              Linking.openURL('https://pathwaygh.com/privacy.html');
            }}
            style={{
              justifyContent: 'center',
              padding: 5,
              marginVertical: 4,
            }}>
            <Text color="blue.400">Terms & Conditions</Text>
          </Pressable>

          {context.errorHandler.show ? (
            <Alerts
              type={context.errorHandler.type}
              msg={context.errorHandler.msg}
              onClose={context._toggleError}
            />
          ) : null}

          <Pressable
            onPress={context.system.loading ? null : context._getLoan}
            style={{
              backgroundColor: primaryColor,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              width: '50%',
              height: 40,
              marginTop: 30,
            }}>
            {context.system.loading ? (
              <Loader />
            ) : (
              <Text color={secondaryColor} fontWeight="bold" fontSize={16}>
                Apply
              </Text>
            )}
          </Pressable>
        </VStack>
      </ScrollView>
    </View>
  );
}
