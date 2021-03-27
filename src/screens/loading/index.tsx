import React from 'react';
import {Animated, View} from 'react-native';

import {ILoadingScreen} from './types';
import {styles} from './styles';
import {LogoSVG} from '../../assets/logo';
import {LOGO_SIZE} from '../../constants';
import {useFlip} from '../../animations';

export function LoadingScreen(props: ILoadingScreen) {
  const flipTransform = useFlip({duration: 400});

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: flipTransform}}>
        <LogoSVG fill="#FFFFFF" width={LOGO_SIZE} height={LOGO_SIZE} />
      </Animated.View>
    </View>
  );
}
