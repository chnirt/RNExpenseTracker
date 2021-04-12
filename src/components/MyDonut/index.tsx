import * as React from 'react';
import {Easing, TextInput, Animated, View, StyleSheet} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

export function MyDonut({
  percentage = 75,
  radius = 34,
  strokeWidth = 3,
  duration = 500,
  color = 'tomato',
  max = 100,
  children,
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };

  React.useEffect(() => {
    animation(percentage);
    animated.addListener(
      (v) => {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circumference - (circumference * maxPerc) / 100;
        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [max, percentage],
    );

    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View style={{width: radius * 2, height: radius * 2}}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <View style={(StyleSheet.absoluteFillObject, styles.content)}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {fontWeight: '900', textAlign: 'center'},
  content: {
    position: 'absolute',
    left: '29%',
    top: '29%',
  },
});
