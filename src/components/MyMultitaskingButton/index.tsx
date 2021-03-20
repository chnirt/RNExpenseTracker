import React, {useRef, useState} from 'react';
import {Animated, Pressable, View} from 'react-native';

import {IMyMultitaskingButton} from './types';
import {styles} from './styles';
import {PlusSVG} from '../../assets/svgs';
import {BOTTOM_HEIGHT, BOTTOM_BUTTON_HEIGHT, ICON_SIZE} from '../../constants';

export function MyMultitaskingButton({fill}: IMyMultitaskingButton) {
  const [show, setShow] = useState(false);
  const mode = useRef(new Animated.Value(0)).current;

  const toggleView = () => {
    Animated.timing(mode, {
      toValue: !show ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setShow((prevState) => !prevState));
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
        <Pressable onPress={() => {}} style={styles.miniButtonContainer}>
          <PlusSVG
            fill="#FFFFFF"
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </Pressable>
      </Animated.View>
      {/* <Animated.View
        style={{
          position: 'absolute',
          top: secondY,
          opacity,
        }}>
        <Pressable onPress={() => {}} style={styles.miniButtonContainer}>
          <PlusSVG
            fill="#FFFFFF"
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </Pressable>
      </Animated.View> */}
      <Animated.View
        style={{
          position: 'absolute',
          top: thirdY,
          left: thirdX,
          opacity,
        }}>
        <Pressable onPress={() => {}} style={styles.miniButtonContainer}>
          <PlusSVG
            fill="#FFFFFF"
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </Pressable>
      </Animated.View>
      {/* <Animated.View
        style={{
          position: 'absolute',
          left: fourthX,
          opacity,
        }}>
        <Pressable onPress={() => {}} style={styles.miniButtonContainer}>
          <PlusSVG
            fill="#FFFFFF"
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </Pressable>
      </Animated.View> */}
      {/* <Animated.View
        style={{
          position: 'absolute',
          left: fifthX,
          opacity,
        }}>
        <Pressable onPress={() => {}} style={styles.miniButtonContainer}>
          <PlusSVG
            fill="#FFFFFF"
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </Pressable>
      </Animated.View> */}

      <Pressable onPress={toggleView} style={styles.buttonContainer}>
        <Animated.View
          style={{
            transform: [{rotate: rotation}],
          }}>
          <PlusSVG fill="#FFFFFF" width={ICON_SIZE} height={ICON_SIZE} />
        </Animated.View>
      </Pressable>
    </View>
  );
}
