import React from 'react';
import {View, TextInput} from 'react-native';

import {IMyInput} from './types';
import {styles} from './styles';
import {MyText} from '../MyText';
import {DISABLED_COLOR, THIRD_COLOR} from '../../constants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export function MyInput(props: IMyInput) {
  const {
    label,
    placeholder,
    maxLength,
    value,
    onPress,
    horizontal = true,
    vertical = false,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={[
          styles.inputContainer,
          horizontal && styles.horizontalInputContainer,
          vertical && styles.verticalInputContainer,
        ]}
        onPress={onPress}>
        <MyText h6 color={'#000'}>
          {label}
        </MyText>
        {vertical ? (
          <TextInput
            style={[styles.input, vertical && styles.verticalInput]}
            placeholder={placeholder}
            textAlign={vertical ? 'left' : 'right'}
            maxLength={maxLength}
          />
        ) : (
          <MyText h6 color={DISABLED_COLOR}>
            {maxLength ? value.substring(0, maxLength) : value}
          </MyText>
        )}
      </TouchableWithoutFeedback>
      <View style={styles.divider} />
    </View>
  );
}