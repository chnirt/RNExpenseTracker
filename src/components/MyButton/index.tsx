import React from 'react';
import {View, Text} from 'react-native';

import {ISampleScreen} from './types';
import {styles} from './styles';

export function SampleScreen(props: ISampleScreen) {
  return (
    <View style={styles.container}>
      <Text>SampleScreen</Text>
    </View>
  );
}
