import React, {useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {IMyMultitaskingButton} from './types';
import {styles} from './styles';
import {PlusSVG, CategorySVG, ExpenseSVG} from '../../assets/svgs';
import {
  BOTTOM_HEIGHT,
  BOTTOM_BUTTON_HEIGHT,
  ICON_SIZE,
  CATEGORIES,
  EXPENSE,
} from '../../constants';

export function MyMultitaskingButton({fill}: IMyMultitaskingButton) {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const mode = useRef(new Animated.Value(0)).current;

  const toggleView = () => {
    Animated.timing(mode, {
      toValue: !show ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setShow((prevState) => !prevState));
  };

  const closeShow = () => {
    Animated.timing(mode, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setShow(false));
  };

  const firstY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [
      BOTTOM_BUTTON_HEIGHT * 0.25,
      BOTTOM_BUTTON_HEIGHT * 0.25 - BOTTOM_BUTTON_HEIGHT / Math.sqrt(2),
    ],
  });
  const firstX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [
      BOTTOM_BUTTON_HEIGHT * 0.25,
      BOTTOM_BUTTON_HEIGHT * (0.25 - 1 / Math.sqrt(2)),
    ],
  });

  // const secondY = mode.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [
  //     BOTTOM_BUTTON_HEIGHT * 0.25,
  //     BOTTOM_BUTTON_HEIGHT * 0.25 - BOTTOM_BUTTON_HEIGHT,
  //   ],
  // });

  const thirdY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [
      BOTTOM_BUTTON_HEIGHT * 0.25,
      BOTTOM_BUTTON_HEIGHT * 0.25 - BOTTOM_BUTTON_HEIGHT / Math.sqrt(2),
    ],
  });
  const thirdX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [
      BOTTOM_BUTTON_HEIGHT * 0.25,
      BOTTOM_BUTTON_HEIGHT * 0.25 + BOTTOM_BUTTON_HEIGHT / Math.sqrt(2),
    ],
  });

  // const fourthX = mode.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [
  //     BOTTOM_BUTTON_HEIGHT * 0.25,
  //     BOTTOM_BUTTON_HEIGHT * 0.25 - BOTTOM_BUTTON_HEIGHT,
  //   ],
  // });

  // const fifthX = mode.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [
  //     BOTTOM_BUTTON_HEIGHT * 0.25,
  //     BOTTOM_BUTTON_HEIGHT * 0.25 + BOTTOM_BUTTON_HEIGHT,
  //   ],
  // });

  const opacity = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1],
  });

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const navigateCategory = () => {
    console.log('123');
    navigation.navigate(CATEGORIES);
    closeShow();
  };

  const navigateExpense = () => {
    navigation.navigate(EXPENSE);
    closeShow();
  };

  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: -BOTTOM_HEIGHT / 2,
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          top: firstY,
          left: firstX,
          opacity,
        }}>
        <TouchableWithoutFeedback
          onPress={navigateCategory}
          style={styles.miniButtonContainer}>
          <CategorySVG
            fill="#FFFFFF"
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </TouchableWithoutFeedback>
      </Animated.View>

      {/* <Animated.View
        style={{
          position: 'absolute',
          top: secondY,
          opacity,
        }}>
        <TouchableWithoutFeedback
          onPress={() => {}}
          style={styles.miniButtonContainer}>
          <PlusSVG
            fill="#FFFFFF"
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </TouchableWithoutFeedback>
      </Animated.View> */}

      <Animated.View
        style={{
          position: 'absolute',
          top: thirdY,
          left: thirdX,
          opacity,
        }}>
        <TouchableWithoutFeedback
          onPress={navigateExpense}
          style={styles.miniButtonContainer}>
          <ExpenseSVG
            fill="#FFFFFF"
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </TouchableWithoutFeedback>
      </Animated.View>

      {/* <Animated.View
        style={{
          position: 'absolute',
          left: fourthX,
          opacity,
        }}>
        <TouchableWithoutFeedback onPress={() => {}} style={styles.miniButtonContainer}>
          <PlusSVG
            fill="#FFFFFF"
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </TouchableWithoutFeedback>
      </Animated.View> */}

      {/* <Animated.View
        style={{
          position: 'absolute',
          left: fifthX,
          opacity,
        }}>
        <TouchableWithoutFeedback onPress={() => {}} style={styles.miniButtonContainer}>
          <PlusSVG
            fill="#FFFFFF"
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </TouchableWithoutFeedback>
      </Animated.View> */}

      <TouchableWithoutFeedback
        onPress={toggleView}
        style={styles.buttonContainer}>
        <Animated.View
          style={{
            transform: [{rotate: rotation}],
          }}>
          <PlusSVG fill="#FFFFFF" width={ICON_SIZE} height={ICON_SIZE} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
