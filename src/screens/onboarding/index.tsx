import React from 'react';
import {View, Text} from 'react-native';

import {IOnboardingScreen} from './types';
import {styles} from './styles';

import Invest from './Invest.svg';

export function OnboardingScreen(props: IOnboardingScreen) {
  return (
    <View style={styles.container}>
      <Text>OnboardingScreen</Text>
      <Invest />
    </View>
  );
}
