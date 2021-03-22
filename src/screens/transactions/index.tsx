import React, {useEffect} from 'react';
import {View, Text, SectionList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {ITransactionItem, ITransactionsScreen} from './types';
import {styles} from './styles';
import {TransactionFillSVG} from '../../assets/svgs';
import {PRIMARY_COLOR, ICON_SIZE, INCOME_COLOR, EXPENSE_COLOR} from '../../constants';
import {useCalendar} from '../../context';
import {MySeparator} from '../../components';

const DATA = [
  {
    date: '15/05/2021',
    data: [
      {
        id: 'fusu-ssf223-fjj1',
        title: 'Mua xe',
        note: 'Toyota',
        price: '603,1350,000',
        status: 'income',
      },
      {
        id: 'fusu-ssf223-fjj2',
        title: 'Mua nha',
        note: 'Level 4',
        price: '2,222,250,000',
        status: 'expense',
      },
      {
        id: 'fusu-ssf223-fjj3',
        title: 'Mua nha',
        note: 'Level 4',
        price: '2,222,250,000',
        status: 'income',
      },
      {
        id: 'fusu-ssf223-fjj4',
        title: 'Mua nha',
        note: 'Level 4',
        price: '2,222,250,000',
        status: 'expense',
      },
    ]
  },
  {
    date: '16/05/2021',
    data: [
      {
        id: 'fusu-ssf223-fjj5',
        title: 'Mua xe',
        note: 'Toyota',
        price: '603,1350,000',
        status: 'income',
      },
      {
        id: 'fusu-ssf223-fjj6',
        title: 'Mua nha',
        note: 'Level 4',
        price: '2,222,250,000',
        status: 'expense',
      },
      {
        id: 'fusu-ssf223-fjj7',
        title: 'Mua nha',
        note: 'Level 4',
        price: '2,222,250,000',
        status: 'income',
      },
      {
        id: 'fusu-ssf223-fjj8',
        title: 'Mua nha',
        note: 'Level 4',
        price: '2,222,250,000',
        status: 'expense',
      },
    ]
  },
  {
    date: '17/05/2021',
    data: [
      {
        id: 'fusu-ssf223-fjj9',
        title: 'Mua xe',
        note: 'Toyota',
        price: '603,1350,000',
        status: 'income',
      },
      {
        id: 'fusu-ssf223-fjj10',
        title: 'Mua nha',
        note: 'Level 4',
        price: '2,222,250,000',
        status: 'expense',
      },
      {
        id: 'fusu-ssf223-fjj11',
        title: 'Mua nha',
        note: 'Level 4',
        price: '2,222,250,000',
        status: 'income',
      },
      {
        id: 'fusu-ssf223-fjj12',
        title: 'Mua nha',
        note: 'Level 4',
        price: '2,222,250,000',
        status: 'expense',
      },
    ]
  },
];

export function TransactionsScreen(props: ITransactionsScreen) {
  const navigation = useNavigation();
  const {toggle} = useCalendar();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Transaction',
      headerRight: () => (
        <TouchableWithoutFeedback style={styles.headerRight} onPress={toggle}>
          <TransactionFillSVG
            fill={PRIMARY_COLOR}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </TouchableWithoutFeedback>
      ),
    });
  }, []);

  const TransactionItem = ({item}: ITransactionItem) => {
    return (
      <View style={styles.transactionItem}>
        <View style={styles.leftSection}>
          <TransactionFillSVG
            fill={PRIMARY_COLOR}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
          <View style={styles.transactionInfo}>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <Text style={styles.transactionDate}>{item.note}</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Text style={[styles.transactionPrice, {color: item.status === 'income' ? INCOME_COLOR : EXPENSE_COLOR}]}>
            {item.price}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        contentContainerStyle={styles.content}
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={TransactionItem}
        renderSectionHeader={({ section: { date } }) => (
          <Text style={styles.transactionHeader}>{date}</Text>
        )}
        SectionSeparatorComponent={() => (
          <MySeparator size={5} />
        )}
        renderSectionFooter={() => (
          <MySeparator size={10} />
        )}
      />
    </View>
  );
}