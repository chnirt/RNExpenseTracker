import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {IExpenseScreen} from './types';
import {styles} from './styles';
import {CloseSVG} from '../../assets/svgs';
import {ICON_SIZE, THIRD_COLOR} from '../../constants';
import {MyInput, MyText, MyButton} from '../../components';
import {useCalendar, useCategories, useNumberPad} from '../../context';

export function ExpenseScreen(props: IExpenseScreen) {
  const navigation = useNavigation();
  const {handleOpen: handleOpenCalendar} = useCalendar();
  const {value: money, handleOpen: handleOpenNumberPad} = useNumberPad();
  const {handleOpen: handleOpenCategories} = useCategories();

  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');

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

  const handleAddTransaction = () => {
    console.log(date, money, category, comment);
    goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <MyInput label="Date" value={date} onPress={handleOpenCalendar} />
        <MyInput
          label="Money (VND)"
          value={money}
          onPress={handleOpenNumberPad}
        />
        <MyInput
          label="Category"
          value={category}
          onPress={handleOpenCategories}
        />
        <MyInput
          label="Comment"
          value={comment}
          onChangeText={setComment}
          vertical
        />
      </View>
      <MyButton onPress={handleAddTransaction} primary>
        Add Transaction
      </MyButton>
    </SafeAreaView>
  );
}
