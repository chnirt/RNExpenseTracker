import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {IExpenseScreen} from './types';
import {styles} from './styles';
import {CloseSVG} from '../../assets/svgs';
import {ICON_SIZE, THIRD_COLOR} from '../../constants';
import {MyInput, MyText, MyButton} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

export function ExpenseScreen(props: IExpenseScreen) {
  const navigation = useNavigation();

  const [date, setDate] = useState('123');
  const [comment, setComment] = useState('s');

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
      headerTitle: () => <MyText h6>Add Transaction</MyText>,
    });
  }, []);

  const goBack = () => navigation.goBack();

  const onPress = () => {
    setDate(Math.random().toString());
  };

  const handleAddTransaction = () => {
    goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <MyInput
          label="Date"
          placeholder={new Date().toLocaleString()}
          maxLength={5}
          value={date}
          onPress={onPress}
        />
        <MyInput
          label="Money (VND)"
          placeholder="0"
          maxLength={5}
          value={date}
          onPress={onPress}
        />
        <MyInput
          label="Category"
          maxLength={5}
          value={comment}
          onChange={setComment}
          onPress={onPress}
        />
        <MyInput label="Comment" vertical placeholder="1234" />
      </View>
      <MyButton onPress={handleAddTransaction} primary>
        Add Transaction
      </MyButton>
    </SafeAreaView>
  );
}
