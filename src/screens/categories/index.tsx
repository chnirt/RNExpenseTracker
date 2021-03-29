import React, {useEffect} from 'react';
import {View, Text, SectionList, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {ICategoriesScreen} from './types';
import {styles} from './styles';
import {CardSVG, CloseSVG} from '../../assets/svgs';
import {useShadow} from '../../hooks';
import {
  DISABLED_COLOR,
  ICON_SIZE,
  PRIMARY_COLOR,
  WINDOW_WIDTH,
} from '../../constants';

const DATA = [
  {
    title: 'Main dishes',
    data: [...Array(9).keys()].map((_, i) => i),
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export function CategoriesScreen(props: ICategoriesScreen) {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableWithoutFeedback
          style={styles.headerLeftButton}
          onPress={goBack}>
          <CloseSVG
            fill={DISABLED_COLOR}
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </TouchableWithoutFeedback>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      {
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={
            {
              // borderColor: 'red',
              // borderWidth: 1,
            }
          }
          pagingEnabled
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: WINDOW_WIDTH,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {item.data.map((element) => {
                  return (
                    <View
                      style={{
                        width: WINDOW_WIDTH / 3,
                        height: WINDOW_WIDTH / 3,

                        justifyContent: 'center',
                        alignItems: 'center',

                        // borderColor: 'red',
                        // borderWidth: 1,
                      }}>
                      <View
                        style={{
                          width: WINDOW_WIDTH / 5,
                          height: WINDOW_WIDTH / 5,
                          backgroundColor: 'white',
                          borderRadius: WINDOW_WIDTH / 10,
                          margin: 15,
                          justifyContent: 'center',
                          alignItems: 'center',
                          ...useShadow({depth: 12, color: PRIMARY_COLOR}),
                        }}>
                        <CardSVG fill={PRIMARY_COLOR} width={24} height={24} />
                      </View>
                      <Text style={{color: '#8395A2'}}>Category</Text>
                    </View>
                  );
                })}
              </View>
            );
          }}
        />
      }
    </View>
  );
}
