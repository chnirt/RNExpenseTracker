import React, {useEffect} from 'react';
import {View, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {ILoadingScreen} from './types';
import {styles} from './styles';
import {LogoSVG} from '../../assets/logo';
import {LOGO_SIZE} from '../../constants';
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
    <View style={styles.container}>
      <Animated.View style={{transform: flipTransform}}>
        <LogoSVG fill="#FFFFFF" width={LOGO_SIZE} height={LOGO_SIZE} />
      </Animated.View>
    </View>
  );
}
