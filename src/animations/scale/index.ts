import {useRef} from 'react';
import {Animated} from 'react-native';

interface IUseScale {
  from: number;
  to: number;
}

export const useScale = ({from = 0.5, to = 1}: IUseScale) => {
  const animation = useRef(new Animated.Value(0)).current;
  const inputRange = [0, 1];
  const outputRange = [from, to];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return {scale, onPressIn, onPressOut};
};
