import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

import {IAppScreen} from './types';
import {styles} from './styles';
import {useAuth} from '../../context';

export function AppScreen(props: IAppScreen) {
  const {logout} = useAuth();

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Button onPress={logout} title="Log out" />
    </View>
  );
}
