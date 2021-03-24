import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {IUseFlip} from './types';

export const useFlip = ({duration = 1000}: IUseFlip) => {
  const rotateX = useRef(new Animated.Value(0)).current;
  const rotateY = useRef(new Animated.Value(0)).current;

  const flip = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateX, {
          toValue: 1,
          duration,
          delay: 0,
          useNativeDriver: true,
        }),
        Animated.timing(rotateY, {
          toValue: 1,
          duration,
          delay: 0,
          useNativeDriver: true,
        }),
        Animated.timing(rotateX, {
          toValue: 0,
          duration,
          delay: 0,
          useNativeDriver: true,
        }),
        Animated.timing(rotateY, {
          toValue: 0,
          duration,
          delay: 0,
          useNativeDriver: true,
        }),
      ]),
    ).start(() => flip());
  };

  const rotateXInterpolate = rotateX.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const rotateYInterpolate = rotateY.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  useEffect(() => {
    flip();
  }, []);

  const transform = [
    {
      rotateX: rotateXInterpolate,
    },
    {
      rotateY: rotateYInterpolate,
    },
  ];

  return transform;
};
