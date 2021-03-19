import React, {useRef, useState} from 'react';
import {Animated, Pressable} from 'react-native';

import {IMyMultitaskingButton} from './types';
import {styles} from './styles';
import {PlusSVG} from '../../assets/svgs';
import {BOTTOM_BUTTON_HEIGHT} from '../../constants';

export function MyMultitaskingButton({fill}: IMyMultitaskingButton) {
  const [show, setShow] = useState(false);
  const mode = useRef(new Animated.Value(0)).current;

  const toggleView = () => {
    Animated.timing(mode, {
      toValue: !show ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setShow((prevState) => !prevState));
  };

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <Pressable style={[styles.buttonContainer]} onPress={toggleView}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{rotate: rotation}],
          },
        ]}>
        <PlusSVG
          fill={fill}
          width={BOTTOM_BUTTON_HEIGHT}
          height={BOTTOM_BUTTON_HEIGHT}
        />
      </Animated.View>
    </Pressable>
  );
}
