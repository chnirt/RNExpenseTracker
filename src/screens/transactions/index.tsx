import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Animated, StatusBar, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {ITransactionsScreen} from './types';
import {styles} from './styles';
import {CalendarSVG} from '../../assets/svgs';
import {PRIMARY_COLOR, ICON_SIZE} from '../../constants';
import {useCalendar} from '../../context';

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    id: i.toString(),
    title: 'Mua xe',
    date: '15/05/2021',
    price: '603,1350,000',
  };
});

export function TransactionsScreen(props: ITransactionsScreen) {
  const navigation = useNavigation();
  const {toggle} = useCalendar();

  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Transaction',
      headerRight: () => (
        <TouchableWithoutFeedback style={styles.headerRight} onPress={toggle}>
          <CalendarSVG
            fill={PRIMARY_COLOR}
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </TouchableWithoutFeedback>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const scaleInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const scale = scrollY.interpolate({
            inputRange: scaleInputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={[
                {
                  flexDirection: 'row',
                  padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: '#FFFFFF',
                },
                {opacity, transform: [{scale}]},
              ]}>
              <Image
                source={{
                  uri:
                    'https://images.pexels.com/photos/2083188/pexels-photo-2083188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                }}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                }}
              />
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
