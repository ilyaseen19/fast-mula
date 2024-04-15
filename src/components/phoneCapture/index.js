import React, {useContext} from 'react';
import {
  View,
  Text,
  Stack,
  VStack,
  Input,
  InputGroup,
  InputLeftAddon,
  ScrollView,
} from 'native-base';
import {Pressable} from 'react-native';
import Contexts from '../../libs/contexts';
import Alerts from '../alert';
import Loader from '../../components/loader';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PhoneCap() {
  const context = useContext(Contexts);
  const {primaryColor, secondaryColor, text, white} = context.colors;
  const {phone} = context.inputFeilds;
  const {loading} = context.system;
  const {show, title, msg, type} = context.errorHandler;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{display: 'flex', alignSelf: 'flex-start'}}
        onPress={context._goBack}>
        <Icon name="md-chevron-back" size={30} color="#000" />
      </Pressable>
      <ScrollView style={{flex: 1, paddingTop: '40%'}}>
        <VStack justifyContent="center" alignItems="center">
          <Text fontSize={30} color={secondaryColor}>
            Welcome to
          </Text>
          <Text fontSize={25} fontWeight="bold" color={secondaryColor}>
            PERFICIENT LOANS
          </Text>
          <Stack alignItems="center" mt={10}>
            <InputGroup
              w={{
                base: '70%',
                md: '285',
              }}>
              <InputLeftAddon children={'+260'} />
              <Input
                variant="underlined"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={value =>
                  context._onChange({field: 'phone', value})
                }
                px={3}
                fontSize={18}
                color={"#ccc"}
                textAlign="center"
                w={{
                  base: '90%',
                  md: '100%',
                }}
                placeholder="enter phone number"
              />
            </InputGroup>
          </Stack>
        </VStack>
        <VStack mt={10} p={5} textAlign="center" alignItems="center" w="100%">
          <Pressable
            onPress={loading ? null : context._confirmPhone}
            style={{
              width: '80%',
              backgroundColor: secondaryColor,
              borderRadius: 10,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {loading ? (
              <Loader />
            ) : (
              <Text color={primaryColor} fontSize={18} fontWeight="bold">
                Get verification code
              </Text>
            )}
          </Pressable>
        </VStack>
        {show ? (
          <Alerts
            title={title}
            msg={msg}
            type={type}
            onClose={context._toggleError}
          />
        ) : null}
      </ScrollView>
    </View>
  );
}
