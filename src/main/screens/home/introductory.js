import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useDisclose, VStack, HStack, View, Text, Image} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Context from '../../../libs/stateManagement/context';
import colors, { primaryColor } from '../../../components/colors';

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
          <Image alignSelf="center" size={350} alt='review' source={require("../../../components/images/iou_note.png")} />
          <Text color={primaryColor} fontWeight="bold" fontSize={15} textAlign="center">IOU is the place where you can get fast and secure micro loans, with low interest rates</Text>
          <Pressable style={{backgroundColor: primaryColor, borderRadius: 15, width: "50%", height: 40, justifyContent: 'center', alignItems: 'center', marginVertical: 30}}>
            <Text fontSize={15} fontWeight="bold">Proceed</Text>
          </Pressable>
        </VStack>
      </View>
    );
  }

  if (title === 'agri') {
    return <Text>{title}</Text>;
  }

  if (title === 'farm') {
    return <Text>{title}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
  },
});
