import React, {useEffect} from 'react';
import {FlatList, SectionList, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {IAppScreen} from './types';
import {styles} from './styles';
import {useAuth} from '../../context';
import {MyAvatar, MyButton, MyText} from '../../components';
import {useShadow} from '../../hooks';
import {PRIMARY_COLOR, SCREEN_BORDER_RADIUS} from '../../constants';
import {chunkArray} from '../../utils';
import {WINDOW_WIDTH} from '../../constants';

const DATA = [...Array(30).keys()]
  .map((_, i) => ({
    id: i.toString(),
    title: 'chin' + i,
    data: ['Pizza', 'Burger', 'Risotto'],
  }))
  .map(({title}) => title);

// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];

export function AppScreen(props: IAppScreen) {
  const {logout} = useAuth();
  const navigation = useNavigation();

  // const newArray = chunkArray(DATA, 9).map((item, i) => ({
  //   title: i,
  //   data: item,
  // }));

  const handleAvatar = () => navigation.openDrawer();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        ...useShadow({depth: 12, color: PRIMARY_COLOR}),
        backgroundColor: 'transparent',
        borderTopRightRadius: SCREEN_BORDER_RADIUS,
      },
      headerTitle: () => <MyText h6>App</MyText>,
      headerRight: () => (
        <TouchableWithoutFeedback
          style={styles.headerLeftButton}
          onPress={handleAvatar}>
          <MyAvatar
            name="Chnirt"
            uri="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </TouchableWithoutFeedback>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <SectionList
        // horizontal
        sections={newArray}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: WINDOW_WIDTH / 3,
            }}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        // renderSectionHeader={({section: {title}}) => (
        //   <Text style={styles.header}>{title}</Text>
        // )}
      /> */}
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
