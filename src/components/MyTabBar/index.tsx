import React from 'react';
import {View, Pressable, Animated} from 'react-native';
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
import {useScale} from '../../animations';

export function MyTabBar({state, descriptors, navigation}: IMyTabBar) {
  return (
    <SafeAreaView style={styles.safeView} edges={['bottom']}>
      <View style={styles.bottomTabContainer}>
        {state.routes.map((route, index: number) => {
          const {scale, onPressIn, onPressOut} = useScale({from: 1, to: 1.2});

          const {options} = descriptors[route.key];
          // const label =
          //   options.tabBarLabel !== undefined
          //     ? options.tabBarLabel
          //     : options.title !== undefined
          //     ? options.title
          //     : route.name;

          const isFocused = state.index === index;
          const isCenter = index !== 1;
          const color = isFocused ? PRIMARY_COLOR : DISABLED_COLOR;

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
                return <MyMultitaskingButton fill={PRIMARY_COLOR} />;
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
              // onPress={onPress}
              onLongPress={onLongPress}
              onPressIn={() => {
                onPressIn();
                onPress();
              }}
              onPressOut={onPressOut}
              style={styles.bottomTabButton}>
              <Animated.View
                style={[
                  styles.bottomTabButton,
                  isCenter && {transform: [{scale}]},
                ]}>
                {renderTabIcon({
                  index,
                  isFocused,
                  color,
                })}
                {/* <Text style={{color}}>{label}</Text> */}
              </Animated.View>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
