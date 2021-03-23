import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
  APP_DRAWER_STACK,
  APP_STACK,
  AUTH_STACK,
} from '../constants';
import {
  LoadingScreen,
  LoginScreen,
  RegisterScreen,
  AppScreen,
  TransactionsScreen,
  CategoriesScreen,
  ExpenseScreen,
  SettingsScreen,
} from '../screens';
import {useAuth} from '../context';
import {MyTabBar} from '../components';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();
const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MultitaskingButton = () => {
  return null;
};

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        unmountOnBlur: true,
      }}>
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

const AppDrawerScreen = () => (
  <AppDrawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerPosition: 'right',
      drawerType: 'front',
    }}>
    <AppDrawer.Screen name={MY_TABS} component={MyTabs} />
    <AppDrawer.Screen name="Settings" component={SettingsScreen} />
  </AppDrawer.Navigator>
);

const AppStackScreen = () => (
  <AppStack.Navigator screenOptions={{headerShown: false}}>
    <AppStack.Screen name={APP_DRAWER_STACK} component={AppDrawerScreen} />
  </AppStack.Navigator>
);

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name={LOGIN} component={LoginScreen} />
    <AuthStack.Screen name={REGISTER} component={RegisterScreen} />
  </AuthStack.Navigator>
);

export function RootStackScreen() {
  const {initializing, isAuth} = useAuth();

  return (
    <RootStack.Navigator mode="modal" screenOptions={{animationEnabled: false}}>
      {initializing ? (
        <RootStack.Screen name={LOADING} component={LoadingScreen} />
      ) : isAuth ? (
        <RootStack.Screen
          name={APP_STACK}
          component={AppStackScreen}
          options={{headerShown: false}}
        />
      ) : (
        <RootStack.Screen
          name={AUTH_STACK}
          component={AuthStackScreen}
          options={{headerShown: false}}
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
