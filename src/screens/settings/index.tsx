import React from 'react';
import {View, Text} from 'react-native';

import {ISettingsScreen} from './types';
import {styles} from './styles';

export function SettingsScreen(props: ISettingsScreen) {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
    </View>
  );
}
