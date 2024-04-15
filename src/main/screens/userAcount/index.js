import * as React from 'react';
import {View, ScrollView, Text} from 'react-native';
import RecordsHeader from '../../../components/header/records';
// import InfoView from '../../../components/card/info';
import Context from '../../../libs/stateManagement/context';

export default function UserProfile() {
  const context = React.useContext(Context);
  const [edit, setEdit] = React.useState(false);
  const {primaryColor, text, myGrey} = context.colors;
  // const user = context.user;

  // const _renderPersonalInfo = () => {
  //   return (
  //     <VStack mb={3}>
  //       <InfoView
  //         lable="Date of birth"
  //         value={new Date(user.pesonalInfo.dob).toLocaleDateString()}
  //       />
  //       <InfoView
  //         lable="Educational level"
  //         value={user.pesonalInfo.educationalLevel}
  //       />
  //       <InfoView lable="Plot/house Number" value={user.pesonalInfo.dAddress} />
  //       <InfoView lable="Area of residence" value={user.pesonalInfo.areaName} />
  //       <InfoView
  //         lable="Marital status"
  //         value={user.pesonalInfo.maritalStatus}
  //       />
  //       <InfoView
  //         lable="Relatives in need of care"
  //         value={user.pesonalInfo.relativesINOC}
  //       />
  //     </VStack>
  //   );
  // };

  // const _renderIDInfo = () => {
  //   return (
  //     <VStack mb={3}>
  //       <InfoView lable="First name" value={user.IDinfo.firstName} />
  //       <InfoView lable="Middle name" value={user.IDinfo.middleName} />
  //       <InfoView lable="Last name" value={user.IDinfo.lastName} />
  //       <InfoView lable="Gender" value={user.IDinfo.gender} />
  //       <InfoView lable="Ghana card number" value={user.IDinfo.gCardNumber} />
  //     </VStack>
  //   );
  // };

  // const _renderWorkInfo = () => {
  //   return (
  //     <VStack mb={3}>
  //       <InfoView lable="Work unit" value={user.workInfo.workUnit} />
  //       <InfoView lable="Industry type" value={user.workInfo.industry} />
  //       <InfoView lable="Working hours" value={user.workInfo.workHours} />
  //       <InfoView lable="Work content" value={user.workInfo.workContent} />
  //     </VStack>
  //   );
  // };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <RecordsHeader title="Account Info" /> */}
      <ScrollView>
        <View
          style={{
            marginTop: 5,
            // marginHorizontal: 10,
            width: '100%',
            paddingVertical: 15,
          }}>
          {/* <InfoView lable="ID" value={user.userId} />
          <InfoView lable="Email" value={user.email} />
          <InfoView lable="Phone" value={user.phone} />
          <InfoView lable="Level" value={user.level} />
          <Text style={{display: 'flex', float: 'left', marginTop: 20}}>
            Personal infomation
          </Text>
          {_renderPersonalInfo()}
          <Text style={{display: 'flex', float: 'left', marginTop: 20}}>
            ID infomation
          </Text>
          {_renderIDInfo()}
          <Text style={{display: 'flex', float: 'left', marginTop: 20}}>
            Work information
          </Text>
          {_renderWorkInfo()}
          <Text mt={3} fontSize={13} color={text} textAlign="center">
            With higher levels, you will be bale to get bigger deals. Borrow
            more to upgrade your level.
          </Text> */}
          <Text>Account</Text>
        </View>
      </ScrollView>
    </View>
  );
}
