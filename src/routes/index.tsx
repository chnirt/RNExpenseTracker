import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LOGIN, REGISTER, APP} from '../constants';
import {LoginScreen, RegisterScreen, AppScreen} from '../screens';
import {useAuth} from '../context';

const Stack = createStackNavigator();

export function AppStack() {
  const {initializing, isAuth} = useAuth();

  if (initializing) return null;

  return (
    <Stack.Navigator initialRouteName={LOGIN}>
      {!isAuth ? (
        <>
          <Stack.Screen name={LOGIN} component={LoginScreen} />
          <Stack.Screen name={REGISTER} component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name={APP} component={AppScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
