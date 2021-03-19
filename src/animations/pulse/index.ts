import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export const usePulse = () => {
  const scale = useRef(new Animated.Value(1)).current;

  const pulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 1000,
          delay: 0,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.8,
          duration: 1000,
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
