import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {ILoadingScreen} from './types';
import {styles} from './styles';

export function LoadingScreen(props: ILoadingScreen) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>LoadingScreen</Text>
    </View>
  );
}
