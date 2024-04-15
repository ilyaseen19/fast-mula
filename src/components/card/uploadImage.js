import React, {useContext, useEffect} from 'react';
import {View, HStack} from 'native-base';
import {
  ImageBackground,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Contexts from '../../libs/contexts';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export default function UploadImage(props) {
  const context = useContext(Contexts);
  const {white} = context.colors;

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
        width: 350,
        height: 200,
        cropping: true,
        includeBase64: true,
        useFrontCamera: false,
      }).then(async image => {
        image.path = image.path.replace('file://', '');
        image.name =
          image.modificationDate + image.path.split('/').slice(-1)[0];
        props.onChange(image);
      });
    } else {
      Alert.alert('Grant camera permision to proceed');
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
        h={200}
        borderRadius={10}
        w="87%"
        justifyContent="center"
        alignItems="center">
        {props.source === null ? (
          <ImageBackground
            source={props.local}
            alt="id"
            resizeMode="contain"
            style={{
              width: 370,
              height: 200,
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
                name="ios-camera-outline"
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
              width: 320,
              height: 190,
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
                name="ios-camera-outline"
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
