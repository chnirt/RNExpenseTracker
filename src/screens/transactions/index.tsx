import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Animated, StatusBar, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {ITransactionsScreen} from './types';
import {styles} from './styles';
import {CalendarSVG, ExpenseSVG} from '../../assets/svgs';
import {
  PRIMARY_COLOR,
  ICON_SIZE,
  INCOME_COLOR,
  EXPENSE_COLOR,
  SCREEN_BORDER_RADIUS,
} from '../../constants';
import {useCalendar} from '../../context';
import {MyText} from '../../components';
import {useShadow} from '../../hooks';
import {randomNumber} from '../../utils';

const SPACING = 20;
const AVATAR_SIZE = 30;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    id: i.toString(),
    title: 'Buy car',
    date: '15/05/2021',
    price: randomNumber(-100000, 100000),
  };
});

export function TransactionsScreen(props: ITransactionsScreen) {
  const navigation = useNavigation();
  const {handleOpen} = useCalendar();

  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        ...useShadow({depth: 12, color: PRIMARY_COLOR}),
        borderTopRightRadius: SCREEN_BORDER_RADIUS,
      },
      headerTitle: () => <MyText h6>Transactions</MyText>,
      headerRight: () => (
        <TouchableWithoutFeedback
          style={styles.headerRight}
          onPress={handleOpen}>
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
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          const isPositive = item.price > 0;

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

          const formatPrice = item.price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          });

          return (
            <Animated.View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: '#FFFFFF',

                  ...useShadow({depth: 12, color: PRIMARY_COLOR}),
                },
                {opacity, transform: [{scale}]},
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: AVATAR_SIZE,
                    aspectRatio: 1,
                    borderRadius: AVATAR_SIZE / 2,
                    justifyContent: 'center',
                    alignItems: 'center',

                    borderColor: PRIMARY_COLOR,
                    borderWidth: 1,
                  }}>
                  <ExpenseSVG
                    fill={PRIMARY_COLOR}
                    width={ICON_SIZE * 0.75}
                    height={ICON_SIZE * 0.75}
                  />
                </View>
                <MyText style={{marginLeft: 16}} h6>
                  {item.title}
                </MyText>
              </View>

              <MyText h6 color={isPositive ? INCOME_COLOR : EXPENSE_COLOR}>
                {formatPrice}
              </MyText>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
