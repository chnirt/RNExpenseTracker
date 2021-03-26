import React, {useEffect} from 'react';
import {View, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

import {ILoadingScreen} from './types';
import {styles} from './styles';
import {LogoSVG} from '../../assets/logo';
import {LOGO_SIZE, PRIMARY_COLOR} from '../../constants';
import {useFlip} from '../../animations';

export function LoadingScreen(props: ILoadingScreen) {
  const navigation = useNavigation();
  const flipTransform = useFlip({duration: 400});

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      colors={[PRIMARY_COLOR, '#FFFFFF']}>
      <Animated.View style={{transform: flipTransform}}>
        <LogoSVG fill="#FFFFFF" width={LOGO_SIZE} height={LOGO_SIZE} />
      </Animated.View>
    </LinearGradient>
  );
}
