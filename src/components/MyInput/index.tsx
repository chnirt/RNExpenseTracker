import React, {useMemo} from 'react';
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
    onChangeText,
    onPress,
    horizontal = true,
    vertical = false,
  } = props;

  const memoizedValue = useMemo(
    () => (maxLength ? value.substring(0, maxLength) : value),
    [maxLength, value],
  );

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
            value={value}
            onChangeText={onChangeText}
          />
        ) : (
          <MyText h6 color={DISABLED_COLOR}>
            {memoizedValue}
          </MyText>
        )}
      </TouchableWithoutFeedback>
      <View style={styles.divider} />
    </View>
  );
}
