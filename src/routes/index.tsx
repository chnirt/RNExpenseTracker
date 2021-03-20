import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/core';

import {
  LOADING,
  LOGIN,
  REGISTER,
  MY_TABS,
  APP,
  MULTITASKING,
  TRANSACTIONS,
  CATEGORIES,
  EXPENSE,
} from '../constants';
import {
  LoadingScreen,
  LoginScreen,
  RegisterScreen,
  AppScreen,
  TransactionsScreen,
  CategoriesScreen,
  ExpenseScreen,
} from '../screens';
import {useAuth} from '../context';
import {MyTabBar} from '../components';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MultitaskingButton = () => {
  return null;
};

function MyTabs() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name={APP} component={AppScreen} />
      <Tab.Screen
        name={MULTITASKING}
        component={MultitaskingButton}
        listeners={{
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen name={TRANSACTIONS} component={TransactionsScreen} />
    </Tab.Navigator>
  );
}

export function RootStackScreen() {
  const {initializing, isAuth} = useAuth();

  return (
    <RootStack.Navigator mode="modal" screenOptions={{animationEnabled: false}}>
      {initializing ? (
        <RootStack.Screen name={LOADING} component={LoadingScreen} />
      ) : isAuth ? (
        <RootStack.Screen
          name="AppStackScreen"
          component={() => (
            <AppStack.Navigator
              initialRouteName={LOGIN}
              mode="modal"
              screenOptions={{animationEnabled: false}}>
              <AppStack.Screen name={MY_TABS} component={MyTabs} />
            </AppStack.Navigator>
          )}
          options={{headerShown: false}}
        />
      ) : (
        <RootStack.Screen
          name="AuthStackScreen"
          component={() => (
            <AuthStack.Navigator>
              <AuthStack.Screen name={LOGIN} component={LoginScreen} />
              <AuthStack.Screen name={REGISTER} component={RegisterScreen} />
            </AuthStack.Navigator>
          )}
        />
      )}
      <RootStack.Screen
        name={CATEGORIES}
        component={CategoriesScreen}
        options={{animationEnabled: true}}
      />
      <RootStack.Screen
        name={EXPENSE}
        component={ExpenseScreen}
        options={{animationEnabled: true}}
      />
    </RootStack.Navigator>
  );
}
