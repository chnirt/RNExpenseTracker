import React from 'react';
import {View, Text} from 'react-native';

import {IExpenseScreen} from './types';
import {styles} from './styles';

export function ExpenseScreen(props: IExpenseScreen) {
  return (
    <View style={styles.container}>
      <Text>ExpenseScreen</Text>
    </View>
  );
}
