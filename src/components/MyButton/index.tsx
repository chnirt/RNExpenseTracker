import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {IMyButton} from './types';
import {styles} from './styles';
import {MyText} from '../MyText';

export function MyButton({children, onPress, primary}: IMyButton) {
  return (
    <TouchableWithoutFeedback
      style={[styles.container, primary && styles.primaryContainer]}
      onPress={onPress}>
      <MyText button style={[styles.titleText, primary && styles.primaryColor]}>
        {children}
      </MyText>
    </TouchableWithoutFeedback>
  );
}
