import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {IMyTabBar, ITabIcon} from './types';
import {styles} from './styles';
import {DISABLED_COLOR, ICON_SIZE, PRIMARY_COLOR} from '../../constants';
import {
  CardFillSVG,
  CardSVG,
  TransactionFillSVG,
  TransactionSVG,
} from '../../assets/svgs';
import {MyMultitaskingButton} from '../MyMultitaskingButton';

export function MyTabBar({state, descriptors, navigation}: IMyTabBar) {
  return (
    <SafeAreaView style={styles.safeView} edges={['bottom']}>
      <View style={styles.bottomTabContainer}>
        {state.routes.map((route, index: number) => {
          const {options} = descriptors[route.key];
          // const label =
          //   options.tabBarLabel !== undefined
          //     ? options.tabBarLabel
          //     : options.title !== undefined
          //     ? options.title
          //     : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const renderTabIcon = ({index, isFocused, color}: ITabIcon) => {
            switch (index) {
              case 0:
                return isFocused ? (
                  <CardFillSVG
                    fill={color}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                  />
                ) : (
                  <CardSVG fill={color} width={ICON_SIZE} height={ICON_SIZE} />
                );
              case 1:
                return (
                  <MyMultitaskingButton isFocused={isFocused} fill={color} />
                );
              case 2:
                return isFocused ? (
                  <TransactionFillSVG
                    fill={color}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                  />
                ) : (
                  <TransactionSVG
                    fill={color}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                  />
                );
              default:
                return null;
            }
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.bottomTabButton}>
              {renderTabIcon({
                index,
                isFocused,
                color: isFocused ? PRIMARY_COLOR : DISABLED_COLOR,
              })}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
