import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {ILoadingScreen} from './types';
import {styles} from './styles';
import {LogoSVG} from '../../assets/logo';
import {LOGO_SIZE} from '../../constants';

export function LoadingScreen(props: ILoadingScreen) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <LogoSVG fill="#FFFFFF" width={LOGO_SIZE} height={LOGO_SIZE} />
    </View>
  );
}
