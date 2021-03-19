import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  LOGIN,
  REGISTER,
  MY_TABS,
  APP,
  MULTITASKING,
  TRANSACTIONS,
} from '../constants';
import {
  LoginScreen,
  RegisterScreen,
  AppScreen,
  TransactionsScreen,
} from '../screens';
import {useAuth} from '../context';
import {MyTabBar} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MultitaskingButton = () => {
  return null;
};

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name={APP} component={AppScreen} />
      <Tab.Screen name={MULTITASKING} component={MultitaskingButton} />
      <Tab.Screen name={TRANSACTIONS} component={TransactionsScreen} />
    </Tab.Navigator>
  );
}

export function AppStack() {
  const {initializing, isAuth} = useAuth();

  if (initializing) return null;

  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      {!isAuth ? (
        <>
          <Stack.Screen name={LOGIN} component={LoginScreen} />
          <Stack.Screen name={REGISTER} component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name={MY_TABS} component={MyTabs} />
        </>
      )}
    </Stack.Navigator>
  );
}
