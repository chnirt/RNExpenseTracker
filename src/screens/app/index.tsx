import React, {useEffect} from 'react';
import {View, Text, Animated, Pressable} from 'react-native';

import {IAppScreen} from './types';
import {styles} from './styles';
import {useAuth, useCalendar} from '../../context';
import {MyButton} from '../../components';

export function AppScreen(props: IAppScreen) {
  const {logout} = useAuth();
  const {calendarStart, calendarEnd, toggle} = useCalendar();

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Pressable style={{backgroundColor: 'red', padding: 16}} onPress={toggle}>
        <Text>App</Text>
      </Pressable>
      <MyButton onPress={logout} primary>
        Log out
      </MyButton>
    </View>
  );
}
