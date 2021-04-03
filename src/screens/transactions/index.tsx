import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Animated,
  StatusBar,
  Image,
  SectionList,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  VictoryBar,
  VictoryChart,
  VictoryContainer,
  VictoryLabel,
  VictoryPie,
  VictoryTheme,
} from 'victory-native';

import {ITransactionsScreen} from './types';
import {styles} from './styles';
import {CalendarSVG, CardSVG} from '../../assets/svgs';
import {
  PRIMARY_COLOR,
  ICON_SIZE,
  INCOME_COLOR,
  EXPENSE_COLOR,
  SCREEN_BORDER_RADIUS,
  THIRD_COLOR,
} from '../../constants';
import {useCalendar} from '../../context';
import {MyText} from '../../components';
import {useShadow} from '../../hooks';
import {randomNumber} from '../../utils';

const DATA = [
  {
    title: 'Today',
    data: ['Pizza', 'Burger', 'Risotto', 'Risotto', 'Risotto', 'Risotto'],
  },
  {
    title: 'Yesterday',
    data: [
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
    ],
  },
  {
    title: '29/03/2021',
    data: [
      'Water',
      'Coke',
      'Beer',
      'Beer',
      'Beer',
      'Beer',
      'Beer',
      'Beer',
      'Beer',
      'Beer',
    ],
  },
  {
    title: '30/03/2021',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];
const DATA1 = [
  {x: 1, y: 2, label: 'one'},
  {x: 2, y: 3, label: 'two'},
  {x: 3, y: 5, label: 'three'},
];

export function TransactionsScreen(props: ITransactionsScreen) {
  const navigation = useNavigation();
  const {handleOpen} = useCalendar();
  const [selectedCategoryName, setSelectedCategoryName] = useState(
    DATA1[0].label,
  );

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#FFFFFF',
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
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <VictoryPie
        data={DATA1}
        animate={
          {
            // easing: 'expIn',
            // duration: 2000,
            // onLoad: {
            //   duration: 1500,
            //   before: () => ({_y: 0}),
            //   after: (datum) => ({_y: datum._y}),
            // },
          }
        }
        categories={{x: ['dogs', 'cats', 'mice']}}
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
        // containerComponent={<VictoryContainer responsive={false} />}
        // cornerRadius={({datum}) => datum.y * 5}
        // innerRadius={({datum}) => datum.y * 20}
        // labels={({datum}) => datum.y}
        // labelComponent={<VictoryLabel angle={45} />}
        // labelPosition={({index}) => (index ? 'centroid' : 'startAngle')}
        // labelPlacement={({index}) => (index ? 'parallel' : 'vertical')}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onPressIn: () => {
                return [
                  {
                    target: 'data',
                    mutation: ({style, index, ...rest}) => {
                      const categoryName = DATA1[index].label;
                      setSelectedCategoryName((prevState) =>
                        prevState === categoryName ? '' : categoryName,
                      );
                      // return style.fill === '#c43a31'
                      //   ? null
                      //   : {style: {fill: '#c43a31'}};
                    },
                  },
                  // {
                  //   target: 'labels',
                  //   mutation: ({text}) => {
                  //     console.log('!23', text);

                  //     return text === 'clicked' ? null : {text: 'clicked'};
                  //   },
                  // },
                ];
              },
            },
          },
        ]}
        radius={({datum}) => (selectedCategoryName === datum.label ? 150 : 140)}
      />
      <SectionList
        style={{
          backgroundColor: '#FFFFFF',
        }}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({section: {title}}) => (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              padding: 16,
            }}>
            <Text style={{color: THIRD_COLOR, fontWeight: 'bold'}}>
              {title}
            </Text>
          </View>
        )}
        renderItem={({item}) => {
          const amount = randomNumber(-100000, 100000);

          const isPositive = amount > 0;

          // const formatPrice = amount.toLocaleString('vi-VN', {
          //   style: 'currency',
          //   currency: 'VND',
          // });

          const formatPrice = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(amount); // '$100.00'

          return (
            <View
              style={{
                flex: 1,
                padding: 16,
                flexDirection: 'row',
              }}>
              <View style={{marginRight: 16}}>
                <CardSVG
                  fill={PRIMARY_COLOR}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                />
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{}}>{item}</Text>
                  <Text
                    style={{color: isPositive ? INCOME_COLOR : EXPENSE_COLOR}}>
                    {formatPrice}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: THIRD_COLOR}}>Card **6789</Text>
                  <Text style={{color: THIRD_COLOR}}>11:47 AM</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
