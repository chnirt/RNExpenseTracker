import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {ICategoriesScreen} from './types';
import {styles} from './styles';
import {CloseSVG} from '../../assets/svgs';
import {DISABLED_COLOR, ICON_SIZE} from '../../constants';

export function CategoriesScreen(props: ICategoriesScreen) {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableWithoutFeedback
          style={styles.headerLeftButton}
          onPress={goBack}>
          <CloseSVG
            fill={DISABLED_COLOR}
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </TouchableWithoutFeedback>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
    </View>
  );
}
