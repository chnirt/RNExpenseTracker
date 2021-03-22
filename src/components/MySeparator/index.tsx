import React from 'react';
import {View} from 'react-native';
import {ISeparator} from './types';

export function MySeparator({size}: ISeparator) {
  return (
    <View style={{height: size}}></View>
  );
}
