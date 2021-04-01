import React, {useEffect, useRef} from 'react';
import {FlatList, Image, SectionList, Text, View, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {IAppScreen} from './types';
import {styles} from './styles';
import {MyAvatar, MyLoopList, MyText} from '../../components';
import {
  EXPENSE_COLOR,
  ICON_SIZE,
  INCOME_COLOR,
  PRIMARY_COLOR,
  SCREEN_BORDER_RADIUS,
  THIRD_COLOR,
  WINDOW_WIDTH,
} from '../../constants';
import {randomNumber} from '../../utils';

const OVERFLOW_HEIGHT = 700;
const SPACING = 10;
const ITEM_WIDTH = WINDOW_WIDTH * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

const DATA1 = [
  {
    id: '1',
    url:
      'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '2',
    url:
      'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '3',
    url:
      'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '4',
    url:
      'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-931018.jpg&fm=jpg',
  },
];

export function AppScreen(props: IAppScreen) {
  const navigation = useNavigation();
  // const scrollXIndex = useRef(new Animated.Value(0)).current;
  // const scrollXAnimated = useRef(new Animated.Value(0)).current;

  const handleAvatar = () => navigation.openDrawer();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#FFFFFF',
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

    // Animated.spring(scrollXAnimated, {
    //   toValue: scrollXIndex,
    //   useNativeDriver: true,
    // }).start();

    // setInterval(() => {
    //   scrollXIndex.setValue(Math.floor(Math.random() * DATA1.length));
    // }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={DATA1}
        keyExtractor={(_, index) => String(index)}
        horizontal
        inverted
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          padding: SPACING * 2,
        }}
        scrollEnabled={false}
        removeClippedSubviews={false}
        CellRendererComponent={({item, index, children, styles, ...props}) => {
          const newStyle = [styles, {zIndex: DATA1.length - index}];
          return (
            <View style={newStyle} index={index} {...props}>
              {children}
            </View>
          );
        }}
        renderItem={({item, index}) => {
          const inputRange = [index - 1, index, index + 1];
          const translateX = scrollXAnimated.interpolate({
            inputRange,
            outputRange: [50, 0, -100],
          });
          const scale = scrollXAnimated.interpolate({
            inputRange,
            outputRange: [0.8, 1, 1.3],
          });
          const opacity = scrollXAnimated.interpolate({
            inputRange,
            outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
          });
          return (
            <Animated.View
              style={{
                position: 'absolute',
                left: -ITEM_WIDTH / 2,
                opacity,
                transform: [
                  {
                    translateX,
                  },
                  {
                    scale,
                  },
                ],
              }}>
              <Image
                source={{uri: item.url}}
                style={{width: ITEM_WIDTH, height: ITEM_HEIGHT}}
              />
            </Animated.View>
          );
        }}
      /> */}
    </View>
  );
}
