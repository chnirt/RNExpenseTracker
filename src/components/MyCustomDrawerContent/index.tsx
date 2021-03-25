import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

import {styles} from './styles';
import {IMyCustomDrawerContent} from './types';

export function MyCustomDrawerContent({
  progress,
  ...rest
}: IMyCustomDrawerContent) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View style={{transform: [{translateX}]}}>
        <DrawerItemList {...rest} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </Animated.View>
    </DrawerContentScrollView>
  );
}
