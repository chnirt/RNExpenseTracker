import React from 'react';
import {View, Text} from 'react-native';

import {ITransactionsScreen} from './types';
import {styles} from './styles';

export function TransactionsScreen(props: ITransactionsScreen) {
  return (
    <View style={styles.container}>
      <Text>TransactionsScreen</Text>
    </View>
  );
}
