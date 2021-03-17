import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {IRegisterScreen} from './types';
import {styles} from './styles';
import {LOGIN} from '../../constants';

export function RegisterScreen(props: IRegisterScreen) {
  const navigation = useNavigation();

  const navigateLogin = () => navigation.navigate(LOGIN);

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Button onPress={navigateLogin} title="Login" />
    </View>
  );
}
