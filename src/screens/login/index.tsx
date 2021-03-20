import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {ILoginScreen} from './types';
import {styles} from './styles';
import {useAuth} from '../../context';
import {REGISTER} from '../../constants';

export function LoginScreen(props: ILoginScreen) {
  const navigation = useNavigation();
  const {login} = useAuth();

  const [email, setEmail] = useState('trinhchinchin@gmail.com');
  const [pwd, setPwd] = useState('12345678');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogin = () => {
    const res = 1;
    res && login({}, email + pwd);
  };

  const navigateRegister = () => navigation.navigate(REGISTER);

  return (
    <View style={styles.container}>
      <TextInput value={email} onChangeText={setEmail} placeholder="email" />
      <TextInput
        value={pwd}
        onChangeText={setPwd}
        placeholder="pwd"
        secureTextEntry
      />
      <Button onPress={handleLogin} title="Login" />
      <Button onPress={navigateRegister} title="Register" />
    </View>
  );
}
