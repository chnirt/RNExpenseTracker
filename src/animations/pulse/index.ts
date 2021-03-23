import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {IUsePulse} from './types';

export const usePulse = ({duration = 1000}: IUsePulse) => {
  const scale = useRef(new Animated.Value(1)).current;

  const pulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.1,
          duration,
          delay: 0,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.9,
          duration,
          delay: 0,
          useNativeDriver: true,
        }),
      ]),
    ).start(() => pulse());
  };

  useEffect(() => {
    pulse();
  }, []);

  return scale;
};
