import React, {useEffect} from 'react';
import {View, Text, Animated, Pressable} from 'react-native';

import {IAppScreen} from './types';
import {styles} from './styles';
import {useAuth} from '../../context';
import {MyButton} from '../../components';
import {useScale} from '../../animations';

export function AppScreen(props: IAppScreen) {
  const {logout} = useAuth();
  const {scale, onPressIn, onPressOut} = useScale({from: 1, to: 0.5});

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{scale}]}}>
        <Pressable
          style={{backgroundColor: 'red', padding: 16}}
          onPressIn={onPressIn}
          onPressOut={onPressOut}>
          <Text>App</Text>
        </Pressable>
      </Animated.View>
      <MyButton onPress={logout} primary>
        Log out
      </MyButton>
    </View>
  );
}
