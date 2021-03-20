import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {IExpenseScreen} from './types';
import {styles} from './styles';
import {CloseSVG} from '../../assets/svgs';
import {ICON_SIZE, THIRD_COLOR} from '../../constants';

export function ExpenseScreen(props: IExpenseScreen) {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableWithoutFeedback
          style={styles.headerLeftButton}
          onPress={goBack}>
          <CloseSVG
            fill={THIRD_COLOR}
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </TouchableWithoutFeedback>
      ),
      headerTitle: 'Add Transaction',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>ExpenseScreen</Text>
    </View>
  );
}
