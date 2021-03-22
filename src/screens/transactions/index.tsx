import React, { useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {ITransactionItem, ITransactionsScreen} from './types';
import {styles} from './styles';
import {TransactionFillSVG} from '../../assets/svgs';
import {PRIMARY_COLOR, ICON_SIZE} from '../../constants';
import {MyCalendar} from '../../components/MyCalendar';

const DATA= [
  {
    id: 'fusu-ssf223-fjjs',
    title: 'Mua xe',
    date: '15/05/2021',
    price: '603,1350,000',
  },
  {
    id: 'fusu-ssf223-fjj2',
    title: 'Mua nha',
    date: '15/05/2021',
    price: '2,222,250,000',
  },
  {
    id: 'fusu-ssf223-fjj3',
    title: 'Mua nha',
    date: '15/05/2021',
    price: '2,222,250,000',
  },
  {
    id: 'fusu-ssf223-fjj4',
    title: 'Mua nha',
    date: '15/05/2021',
    price: '2,222,250,000',
  },
  {
    id: 'fusu-ssf223-fjj5',
    title: 'Mua nha',
    date: '15/05/2021',
    price: '2,222,250,000',
  },
  {
    id: 'fusu-ssf223-fjj6',
    title: 'Mua nha',
    date: '15/05/2021',
    price: '2,222,250,000',
  },
  {
    id: 'fusu-ssf223-fjj7',
    title: 'Mua nha',
    date: '15/05/2021',
    price: '2,222,250,000',
  },
  {
    id: 'fusu-ssf223-fjj8',
    title: 'Mua nha',
    date: '15/05/2021',
    price: '2,222,250,000',
  },
]

export function TransactionsScreen(props: ITransactionsScreen) {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Transaction",
      headerRight: () => (
        <View style={styles.headerRight}>
           <TransactionFillSVG
            fill={PRIMARY_COLOR}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
          </View>
      )
    })
  }, [])

  const TransactionItem = ({item}: ITransactionItem ) => {
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
            <Text style={styles.transactionDate}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.transactionPrice}>{item.price}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MyCalendar/>
      <FlatList
        data={DATA}
        contentContainerStyle={styles.content}
        renderItem={TransactionItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
