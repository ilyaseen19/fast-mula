import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from './screens/home';
import Records from './screens/records';
import Account from './screens/account';
import Context from '../libs/stateManagement/context';
import Intro from './screens/home/introductory';
import IouType from './screens/home/iou_type';
import MouPage from './screens/auth/mou';
// import Auth from './screens/auth';
// import GetLoan from './screens/getLoan';
// import PaymentMethod from './screens/paymentMethods';
// import AddPaymentMethod from './screens/paymentMethods/addPaymentMethod';
// import VerifyPic from './screens/verifyPic';
// import LoanDetails from './screens/records/loanDetails';
// import AboutUs from './screens/about';
// import PrivacyPolicy from './screens/privacy';
// import UserProfile from './screens/userAcount';
// import UserNotifi from './screens/notifications';
// import PatialPay from './screens/home/payments/partialPayment';
// import FullPay from './screens/home/payments/fullPayment';
// import ApplyExtension from './screens/records/extension';
// import socket from '../libs/sockets';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  const context = useContext(Context);
  const {primaryColor, text} = context.colors;
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) =>
            focused ? (
              <Icon name="home" size={35} color={primaryColor} />
            ) : (
              <Icon name="home-outline" size={size} color={primaryColor} />
            ),
        }}
      />
      <Tab.Screen
        name="Records"
        component={Records}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) =>
            focused ? (
              <Icon name="file-tray-full" size={35} color={primaryColor} />
            ) : (
              <Icon name="file-tray-full-outline" size={size} color={primaryColor} />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) =>
            focused ? (
              <Icon name="person-circle" size={35} color={primaryColor} />
            ) : (
              <Icon name="person-circle-outline" size={size} color={primaryColor} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Main() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Iou_type" component={IouType} />
      <Stack.Screen name="Mou_page" component={MouPage} />
      {/* <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Loan" component={GetLoan} />
      <Stack.Screen name="Payment_method" component={PaymentMethod} />
      <Stack.Screen name="Add_payment_method" component={AddPaymentMethod} />
      <Stack.Screen name="Verify_pic" component={VerifyPic} />
      <Stack.Screen name="Loan_details" component={LoanDetails} />
      <Stack.Screen name="About_us" component={AboutUs} />
      <Stack.Screen name="Privacy" component={PrivacyPolicy} />
      <Stack.Screen name="Profile" component={UserProfile} />
      <Stack.Screen name="Notifications" component={UserNotifi} />
      <Stack.Screen name="partial_payment" component={PatialPay} />
      <Stack.Screen name="full_payment" component={FullPay} />
      <Stack.Screen name="apply_extension" component={ApplyExtension} /> */}
    </Stack.Navigator>
  );
}
