import {Image} from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
import p2p from '../images/p2ppana.png';
import intrest from '../images/intrest.png';
import trak from '../images/trak.png';
import encryption from '../images/encryption.png';
import colors from '../colors';

export default function OnboardingScreen({skipDone}) {
  return (
    <Onboarding
      onDone={skipDone}
      onSkip={skipDone}
      titleStyles={{
        fontSize: 15,
        color: colors.primaryColor,
        fontWeight: "bold",
        fontStyle: "italic"
      }}
      bottomBarColor="#fff"
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={p2p}
              resizeMode="contain"
              style={{width: '100%', height: '80%'}}
            />
          ),
          title: 'Stress Free Loan Acquisition',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={intrest}
              resizeMode="contain"
              style={{width: '100%', height: '80%'}}
            />
          ),
          title: 'Lowest Intrest rates in the market',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={trak}
              resizeMode="contain"
              style={{width: '100%', height: '80%'}}
            />
          ),
          title: 'Keep track of your Transactions',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={encryption}
              resizeMode="contain"
              style={{width: '100%', height: '80%'}}
            />
          ),
          title: 'High fidelity security, with end-to-end encryption protocols',
          subtitle: '',
        },
      ]}
    />
  );
}
