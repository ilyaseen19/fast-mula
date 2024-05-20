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
// import Alerts from '../alert';
import Loader from '../../components/loader';
import Icon from 'react-native-vector-icons/Ionicons';
import Context from '../../libs/stateManagement/context';

export default function PhoneCap() {
  const context = useContext(Context);
  const {primaryColor, secondaryColor, text, white} = context.colors;
  const {phone} = context.inputFeilds;
  const {loading} = context;
  // const {show, title, msg, type} = context.errorHandler;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{display: 'flex', alignSelf: 'flex-start', marginTop: 10, marginLeft: 10}}
        onPress={context._goBack}>
        <Icon name="chevron-back" color={primaryColor} size={40} />
      </Pressable>
      <ScrollView style={{flex: 1, paddingTop: '40%'}}>
        <VStack justifyContent="center" alignItems="center">
          <Text fontSize={30} color={primaryColor}>
            Welcome to
          </Text>
          <Text fontSize={25} fontWeight="bold" color={primaryColor}>
            FAST MULA
          </Text>
          <Stack alignItems="center" mt={10}>
            <InputGroup
              w={{
                base: '70%',
                md: '285',
              }}>
              <InputLeftAddon color={primaryColor} borderColor={primaryColor} children={'+260'} />
              <Input
                variant="underlined"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={value =>
                  context._onChange({field: 'phone', value})
                }
                borderColor={primaryColor}
                px={3}
                fontSize={18}
                color={primaryColor}
                textAlign="center"
                w={{
                  base: '95%',
                  md: '100%',
                }}
                placeholder="enter phone number"
              />
            </InputGroup>
          </Stack>
        </VStack>
        <VStack mt={10} p={5} textAlign="center" alignItems="center" w="100%">
          <Pressable
            onPress={ () => {
              // loading ? null : context._confirmPhone
              context._routeToPage('Verify_phone');
            }}
            style={{
              width: '80%',
              backgroundColor: primaryColor,
              borderRadius: 10,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {loading ? (
              <Loader />
            ) : (
              <Text color={secondaryColor} fontSize={18} fontWeight="bold">
                Get verification code
              </Text>
            )}
          </Pressable>
        </VStack>
        {/* {show ? (
          <Alerts
            title={title}
            msg={msg}
            type={type}
            onClose={context._toggleError}
          />
        ) : null} */}
      </ScrollView>
    </View>
  );
}
