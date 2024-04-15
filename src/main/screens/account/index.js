import React, {useContext} from 'react';
// import {
//   View,
//   Text,
//   HStack,
//   VStack,
//   Badge,
//   Center,
//   Actionsheet,
//   Box,
//   useDisclose,
// } from 'native-base';
import {Pressable, Linking, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {callNumber} from '../../../components/makeCall';
import Context from '../../../libs/stateManagement/context';

export default function Account() {
  const context = useContext(Context);
  const {primaryColor, secondaryColor, text, danger} = context.colors;
  const user = context.user;
  // const {isOpen, onOpen, onClose} = useDisclose();

  const customerService = '09700000000056';

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: primaryColor,
      }}>
      {/* <VStack flex={1}>
        <HStack
          w="100%"
          h="20%"
          mt={10}
          py={5}
          justifyContent="center"
          alignItems="center">
          <VStack justifyContent="center" alignItems="center">
            <Text fontSize={20} fontWeight="bold">
              {user !== null && user.isRegistered
                ? user.IDinfo.firstName + ' ' + user.IDinfo.lastName
                : 'You are not registerd'}
            </Text>
            <Badge colorScheme={danger} borderRadius={10}>
              {user !== null && user.isRegistered
                ? 'level ' + user.level
                : 'please register'}
            </Badge>
          </VStack>
        </HStack>
        {user === null ? null : (
          <VStack
            w="100%"
            h="80%"
            bg="#e3e4e6"
            pt={6}
            px={3}
            pb={12}
            borderTopLeftRadius={50}
            borderTopRightRadius={50}>
            <View flex={1}>
              <Pressable
                onPress={() => context._routeToPage('Profile')}
                style={{
                  justifyContent: 'center',
                  padding: 5,
                  marginVertical: 4,
                }}>
                <HStack justifyContent="space-between" alignItems="center">
                  <HStack alignItems="center">
                    <Icon
                      name="md-person-outline"
                      size={22}
                      style={{marginRight: 10}}
                      color={primaryColor}
                    />
                    <Text color={text} fontSize={18} fontWeight="bold">
                      Personal infomation
                    </Text>
                  </HStack>
                  <Icon
                    name="md-chevron-forward-circle-outline"
                    size={22}
                    color={primaryColor}
                  />
                </HStack>
              </Pressable>
              <Pressable
                onPress={() => context._routeToPage('Payment_method')}
                style={{
                  justifyContent: 'center',
                  padding: 5,
                  marginVertical: 8,
                }}>
                <HStack justifyContent="space-between" alignItems="center">
                  <HStack alignItems="center">
                    <Icon
                      name="ios-card"
                      size={22}
                      style={{marginRight: 10}}
                      color={primaryColor}
                    />
                    <Text color={text} fontSize={18} fontWeight="bold">
                      Payment methods
                    </Text>
                  </HStack>
                  <Icon
                    name="md-chevron-forward-circle-outline"
                    size={22}
                    color={primaryColor}
                  />
                </HStack>
              </Pressable>
              <Pressable
                onPress={() => {
                  Linking.openURL('https://pathwaygh.com/privacy.html');
                }}
                style={{
                  justifyContent: 'center',
                  padding: 5,
                  marginVertical: 4,
                }}>
                <HStack justifyContent="space-between" alignItems="center">
                  <HStack alignItems="center">
                    <Icon
                      name="md-lock-closed-outline"
                      size={22}
                      style={{marginRight: 10}}
                      color={primaryColor}
                    />
                    <Text color={text} fontSize={18} fontWeight="bold">
                      Privacy policy
                    </Text>
                  </HStack>
                  <Icon
                    name="md-chevron-forward-circle-outline"
                    size={22}
                    color={primaryColor}
                  />
                </HStack>
              </Pressable>
              <Pressable
                onPress={() => context._routeToPage('About_us')}
                style={{
                  justifyContent: 'center',
                  padding: 5,
                  marginVertical: 4,
                }}>
                <HStack justifyContent="space-between" alignItems="center">
                  <HStack alignItems="center">
                    <Icon
                      name="md-information-circle-outline"
                      size={22}
                      style={{marginRight: 10}}
                      color={primaryColor}
                    />
                    <Text color={text} fontSize={18} fontWeight="bold">
                      About app
                    </Text>
                  </HStack>
                  <Icon
                    name="md-chevron-forward-circle-outline"
                    size={22}
                    color={primaryColor}
                  />
                </HStack>
              </Pressable>
              <Pressable
                onPress={onOpen}
                style={{
                  justifyContent: 'center',
                  padding: 5,
                  marginVertical: 4,
                }}>
                <HStack justifyContent="space-between" alignItems="center">
                  <HStack alignItems="center">
                    <Icon
                      name="md-headset-outline"
                      size={22}
                      style={{marginRight: 10}}
                      color={primaryColor}
                    />
                    <Text color={text} fontSize={18} fontWeight="bold">
                      Customer service
                    </Text>
                  </HStack>
                  <Icon
                    name="md-chevron-forward-circle-outline"
                    size={22}
                    color={primaryColor}
                  />
                </HStack>
              </Pressable>
              <View flex={1} justifyContent="flex-end" mb={5}>
                <HStack
                  alignSelf="center"
                  justifyContent="center"
                  alignItems="center"
                  w="70%"
                  h="35"
                  mt={15}>
                  <Pressable
                    onPress={user === null ? null : context._logout}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 2,
                      borderColor: primaryColor,
                      borderRadius: 10,
                      width: '100%',
                      height: '100%',
                    }}>
                    {user !== null && user.isVerified && user.isRegistered ? (
                      <Text color={text} fontWeight="bold" fontSize={20}>
                        Sign Out
                      </Text>
                    ) : (
                      <Text color={text} fontWeight="bold" fontSize={20}>
                        Sign In
                      </Text>
                    )}
                  </Pressable>
                </HStack>
              </View>
            </View>
          </VStack>
        )}
        <Center>
          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
              <Box w="100%" h={60} px={4} justifyContent="center">
                <Text
                  fontSize="16"
                  color="gray.500"
                  _dark={{
                    color: 'gray.300',
                  }}>
                  Call us
                </Text>
              </Box>
              <Actionsheet.Item onPress={() => callNumber(customerService)}>
                {customerService}
              </Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        </Center>
      </VStack> */}
      <Text>Account</Text>
    </View>
  );
}
