import * as React from 'react';
// import {
//   View,
//   ScrollView,
//   HStack,
//   Center,
//   Actionsheet,
//   Box,
//   useDisclose,
//   Text,
//   Divider,
// } from 'native-base';
// import RecordsHeader from '../../../../components/header/records';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Context from '../../../../libs/stateManagement/context';

export default function LoanDetails() {
  const context = React.useContext(Context);
  const {primaryColor, secondaryColor} = context.colors;
  // const {isOpen, onOpen, onClose} = useDisclose();

  // const loan = context.system.loanDetails;
  // const user = context.user.loan;

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {/* <RecordsHeader title="Loan Deatils" /> */}
      {/* <ScrollView>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 15,
            marginBottom: 10,
            width: '95%',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderColor: primaryColor,
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Amount recieved</Text>
            <Text fontSize={15}>GHS {loan.amount}</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Repayment amount</Text>
            <Text fontSize={15}>
              GHS {user.reAmount === 0 ? loan.repaymentAmount : user.reAmount}
            </Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Loan period</Text>
            <Text fontSize={15}>{loan.duration}</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Interest rate</Text>
            <Text fontSize={15}>{loan.interest}%</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Loan status</Text>
            <Text fontSize={15}>{loan.loanStatus}</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Repayment status</Text>
            <Text fontSize={15}>{loan.paymentStatus}</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Loan submission date</Text>
            <Text fontSize={15}>{new Date(loan.doa).toLocaleDateString()}</Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Loan granted on</Text>
            <Text fontSize={15}>
              {loan.loanStatus === 'Rejected' || loan.loanStatus === 'Review'
                ? loan.loanStatus
                : new Date(loan.dod).toLocaleDateString()}
            </Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Date of payment</Text>
            <Text fontSize={15}>
              {loan.loanStatus === 'Rejected' || loan.loanStatus === 'Review'
                ? loan.loanStatus
                : new Date(loan.dop).toLocaleDateString()}
            </Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            mb={4}>
            <Text fontSize={15}>Date paid</Text>
            <Text fontSize={15}>
              {loan.loanStatus === 'Rejected' || loan.loanStatus === 'Review'
                ? loan.loanStatus
                : loan.dp === null
                ? 'Not payed'
                : new Date(loan.dp).toLocaleDateString()}
            </Text>
          </HStack>
          {loan.isNewLoan &&
          loan.loanStatus === 'Granted' &&
          loan.paymentStatus !== 'Payed' ? (
            <TouchableOpacity
              onPress={onOpen}
              style={{
                backgroundColor: primaryColor,
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: 'center',
                borderRadius: 5,
                width: '50%',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <Text color={secondaryColor} fontWeight="bold" fontSize={20}>
                Pay Loan
              </Text>
            </TouchableOpacity>
          ) : null}

          {loan.loanStatus !== 'Review' &&
          user.days >= 0 &&
          user.days <= 2 &&
          loan.isNewLoan ? (
            <TouchableOpacity
              onPress={() => context._routeToPage('apply_extension')}
              style={{
                backgroundColor: secondaryColor,
                paddingHorizontal: 10,
                paddingVertical: 3,
                alignItems: 'center',
                borderRadius: 5,
                width: '70%',
                alignSelf: 'center',
                marginTop: 15,
              }}>
              <Text color={primaryColor} fontWeight="bold" fontSize={13}>
                Apply for date extension
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </ScrollView>
      <Center>
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
