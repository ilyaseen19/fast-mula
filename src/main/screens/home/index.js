import React from 'react';
import {StyleSheet} from 'react-native';
import {useDisclose, VStack, HStack, View, Text, Image, ScrollView} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
// import Alerts from '../../../components/alert';
import GrantedNoti from '../../../components/grantedCard';
import Loader from '../../../components/loader';
import SubHeader from '../../../components/subHeader/index.js';
import Context from '../../../libs/stateManagement/context';
import colors, {
  myGrey,
  primaryColor,
  secondaryColor,
} from '../../../components/colors';
import ButtonCard from '../../../components/card/buttonCards';

export default function HomePage() {
  const context = React.useContext(Context);
  const {container} = styles;
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <View style={container}>
      {context.loading ? (
        <Loader />
      ) : (
        <>
          <SubHeader onOpen={onOpen} />
          <GrantedNoti />
          <View
            style={{
              backgroundColor: colors.secondaryColor,
              height: '70%',
              marginTop: 'auto',
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              overflow: 'hidden',
              paddingTop: 40,
              paddingHorizontal: 20,
            }}>
              <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            <VStack>
              <HStack justifyContent="space-around" mt={5}>
                <ButtonCard press={()=> context.routeWithProps({path: "Intro", title: "iou"})}>
                  <Text fontSize={20} fontWeight={'bold'} color={primaryColor}>
                    IOU
                  </Text>
                  <Icon name="cash-outline" color={primaryColor} size={70} />
                </ButtonCard>
                <ButtonCard press={()=> context.routeWithProps({path: "Intro", title: "agri"})}>
                  <Text fontSize={20} fontWeight={'bold'} color={primaryColor}>
                    AGRI
                  </Text>
                  <Image alignSelf="center" size={70} alt='review' source={require("../../../components/images/agri.png")} />
                </ButtonCard>
              </HStack>
              <HStack mt={10} justifyContent={'center'} mb={10}>
                <ButtonCard press={()=> context.routeWithProps({path: "Intro", title: "livestock"})}>
                  <Text fontSize={20} fontWeight={'bold'} color={primaryColor}>LIVE STOCK</Text>
                  <Image alignSelf="center" size={70} alt='review' source={require("../../../components/images/farm.png")} />
                </ButtonCard>
              </HStack>
            </VStack>
            </ScrollView>
          </View>

          {/* {context.errorHandler.show ? (
              <Alerts
                type={context.errorHandler.type}
                msg={context.errorHandler.msg}
                onClose={context._toggleError}
              />
            ) : null} */}
        </>
      )}
      {/* <Center>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text
                fontSize="16"
                fontWeight="bold"
                color="gray.500"
                _dark={{
                  color: 'gray.300',
                }}>
                Payment type
              </Text>
            </Box>
            <Actionsheet.Item
              onPress={() => {
                onClose();
                context._routeToPage('partial_payment');
              }}>
              Partial payment
            </Actionsheet.Item>
            <Divider />
            <Actionsheet.Item
              onPress={() => {
                onClose();
                context._routeToPage('full_payment');
              }}>
              Full payment
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Center> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
});
