import React, {useContext} from 'react';
import {View, HStack, } from 'native-base';
import {
  ImageBackground,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import Context from '../../libs/stateManagement/context';
import colors from '../colors';

export default function SelfieImage(props) {
  const context = useContext(Context);
  const {myGrey, white} = context.colors;

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'Pathway Loans needs to use your camera',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const captureImage = async () => {
    let isCameraPermitted = await requestCameraPermission();
    if (isCameraPermitted) {
      ImagePicker.openCamera({
        width: 200,
        height: 350,
        cropping: true,
        includeBase64: true,
        useFrontCamera: true,
      }).then(image => {
        image.path = image.path.replace('file://', '');
        image.name =
          image.modificationDate + image.path.split('/').slice(-1)[0];
        props.onChange(image);
      });
    } else {
      console.log(isCameraPermitted);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <HStack
        h={275}
        borderRadius={10}
        w="58%"
        justifyContent="center"
        alignItems="center">
        {props.source === null || props.source === undefined ? (
          <ImageBackground
            source={props.local}
            alt="id"
            resizeMode="contain"
            style={{
              width: 350,
              height: 350,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={captureImage}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.primaryColor,
                height: 120,
                width: 120,
                borderRadius: 100,
              }}>
              <Icon
                name="camera-outline"
                size={50}
                color={white}
                style={{marginRight: 5}}
              />
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <ImageBackground
            source={{
              uri:
                props.source === null
                  ? ''
                  : `data:${props.source.mime};base64,${props.source.data}`,
            }}
            alt="id"
            resizeMode="contain"
            style={{
              width: 200,
              height: "100%",
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={captureImage}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green',
                height: 100,
                width: 100,
                borderRadius: 100,
              }}>
              <Icon
                name="camera-outline"
                size={50}
                color={white}
                style={{marginRight: 5}}
              />
            </TouchableOpacity>
          </ImageBackground>
        )}
      </HStack>
    </View>
  );
}
