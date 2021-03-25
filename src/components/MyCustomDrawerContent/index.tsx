import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

import {styles} from './styles';
import {IMyCustomDrawerContent} from './types';

export function MyCustomDrawerContent({
  progress,
  ...rest
}: IMyCustomDrawerContent) {
  const drawerStatus = useDrawerStatus();
  console.log(drawerStatus);

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0],
  });

  const translateY = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0],
  });

  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View
        style={[
          {
            transform: [
              {translateX},
              {
                translateY,
              },
            ],
          },
          {
            backgroundColor: 'red',
            flex: 1,
          },
        ]}>
        <DrawerItemList {...rest} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </Animated.View>
    </DrawerContentScrollView>
  );
}
