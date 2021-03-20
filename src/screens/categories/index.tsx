import React from 'react';
import {View, Text} from 'react-native';

import {ICategoriesScreen} from './types';
import {styles} from './styles';

export function CategoriesScreen(props: ICategoriesScreen) {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
    </View>
  );
}
