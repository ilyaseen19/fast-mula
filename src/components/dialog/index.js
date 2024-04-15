import React, {useContext} from 'react';
import {View, Text, VStack} from 'native-base';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';
import Contexts from '../../libs/contexts';

export default function PhoneDialog() {
  const context = useContext(Contexts);
  const {isOpen, content} = context.dialog;

  return (
    <View>
      <Dialog
        visible={true}
        // footer={
        //   <DialogFooter>
        //     <DialogButton
        //       text="CANCEL"
        //       onPress={() => context._setDialog({isOpen: false, content: ''})}
        //     />
        //     <DialogButton text="OK" onPress={() => {}} />
        //   </DialogFooter>
        // }
        >
        <DialogContent>
          <VStack>
            <Text>We are sending a verification code to</Text>
            <Text>{content}</Text>
            <Text>is the nnumber valid ?</Text>
          </VStack>
        </DialogContent>
      </Dialog>
    </View>
  );
}
