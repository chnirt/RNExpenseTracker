import React from 'react';
import {View, Text} from 'react-native';

import {IMyButton} from './types';
import {styles} from './styles';
import {MyText} from '../MyText';

export function MyButton(props: IMyButton) {
  const {title, primary} = props;
  return (
    <View style={[styles.container, primary && styles.primaryContainer]}>
      <MyText button style={[styles.titleText, primary && styles.primaryColor]}>
        {title}
      </MyText>
    </View>
  );
}
