import React, {useEffect} from 'react';
import {FlatList, SectionList, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {IAppScreen} from './types';
import {styles} from './styles';
import {useAuth} from '../../context';
import {MyButton} from '../../components';
// import {useShadow} from '../../hooks';
// import {PRIMARY_COLOR} from '../../constants';
import {chunkArray} from '../../utils';

const DATA = [...Array(30).keys()]
  .map((_, i) => ({
    id: i.toString(),
    title: 'chin' + i,
  }))
  .map(({title}) => title);

const DATA1 = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
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

export function AppScreen(props: IAppScreen) {
  const {logout} = useAuth();
  const navigation = useNavigation();

  const newArray = chunkArray(DATA, 9).map((item, i) => ({
    title: i,
    data: item,
  }));

  console.log(JSON.stringify(newArray, null, 2));

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        // ...useShadow({depth: 24, color: PRIMARY_COLOR}),
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <SectionList
        sections={newArray}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>xxx</Text>
          </View>
        )}
        // renderSectionHeader={({section: {title}}) => (
        //   <Text style={styles.header}>{title}</Text>
        // )}
      />
      {/* <FlatList
        data={DATA}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 10,
                marginBottom: 10,
              }}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[1, 6, 13, 20]}
      /> */}
      <MyButton onPress={logout} primary>
        Log out
      </MyButton>
    </View>
  );
}
