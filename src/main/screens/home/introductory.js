import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {VStack, View, Text, Image} from 'native-base';
import colors, {primaryColor} from '../../../components/colors';
import Context from '../../../libs/stateManagement/context';

export default function Intro({route}) {
  const context = React.useContext(Context);
  const {container} = styles;
  const {title} = route.params;

  if (title === 'iou') {
    return (
      <View style={container}>
        <Text fontSize={20} fontWeight="bold">
          {title}
        </Text>
        <VStack
          overflow="hidden"
          h="95%"
          w="100%"
          borderTopRadius={50}
          mt="auto"
          pt={15}
          px={15}
          justifyContent="center"
          alignItems="center"
          bg={colors.secondaryColor}>
          <Image
            alignSelf="center"
            size={350}
            alt="review"
            source={require('../../../components/images/iou_note.png')}
          />
          <Text
            color={primaryColor}
            fontWeight="bold"
            fontSize={15}
            textAlign="center">
            IOU is the place where you can get fast and secure micro loans, with
            low interest rates
          </Text>
          <Pressable
            onPress={() => {
              context.user.isRegistered
                ? context._routeToPage('Loan')
                : context._routeToPage('Iou_type');
            }}
            style={{
              backgroundColor: primaryColor,
              borderRadius: 15,
              width: '50%',
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
            }}>
            <Text fontSize={15} fontWeight="bold">
              Proceed
            </Text>
          </Pressable>
        </VStack>
      </View>
    );
  }

  if (title === 'agri') {
    return (
      <View style={container}>
        <Text fontSize={20} fontWeight="bold">
          {title}
        </Text>
        <VStack
          overflow="hidden"
          h="95%"
          w="100%"
          borderTopRadius={50}
          mt="auto"
          pt={15}
          px={15}
          justifyContent="center"
          alignItems="center"
          bg={colors.secondaryColor}>
          <Image
            alignSelf="center"
            size={400}
            alt="review"
            source={require('../../../components/images/agri_intro.png')}
          />
          <Text
            color={primaryColor}
            fontWeight="bold"
            fontSize={15}
            textAlign="center">
            Here you can request and borrow Agriculture material to boost your
            farm produce and pay back later
          </Text>
          <Text shadow={5} fontSize={20} fontWeight="bold" color={primaryColor}>
            Coming Soon
          </Text>
        </VStack>
      </View>
    );
  }

  if (title === 'livestock') {
    return (
      <View style={container}>
        <Text fontSize={20} fontWeight="bold">
          {title}
        </Text>
        <VStack
          overflow="hidden"
          h="95%"
          w="100%"
          borderTopRadius={50}
          mt="auto"
          pt={15}
          px={15}
          justifyContent="center"
          alignItems="center"
          bg={colors.secondaryColor}>
          <Image
            alignSelf="center"
            size={400}
            alt="review"
            source={require('../../../components/images/livestock.png')}
          />
          <Text
            color={primaryColor}
            fontWeight="bold"
            fontSize={15}
            textAlign="center">
            Need live stock for your occasions or farm? request and get what you
            need, pay back later!
          </Text>
          <Text shadow={5} fontSize={20} fontWeight="bold" color={primaryColor}>
            Coming Soon
          </Text>
        </VStack>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
  },
});
