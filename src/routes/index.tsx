import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Animated, {Node} from 'react-native-reanimated';

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
import {MyCustomDrawerContent, MyTabBar} from '../components';

import {styles} from './styles';

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

const DrawersScreens = ({style}) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <MyTabs />
    </Animated.View>
  );
};

const AppDrawerScreen = () => {
  const [progress, setProgress] = React.useState<Node<number>>(
    new Animated.Value(0),
  );

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const rotate = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: ['0deg', '-5deg'],
  });

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -110],
  });

  const translateY = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{rotate}, {translateX}, {translateY}],
  };

  return (
    <View style={styles.container}>
      <AppDrawer.Navigator
        // openByDefault
        screenOptions={{
          headerShown: false,
          overlayColor: '#00000000',
          drawerType: 'slide',
          drawerPosition: 'left',
          drawerStyle: styles.drawer,
          drawerContentContainerStyle: styles.contentZIndex,
          drawerContentStyle: styles.contentZIndex,
        }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <MyCustomDrawerContent {...props} />;
        }}>
        <AppDrawer.Screen
          name={MY_TABS}
          // component={MyTabs}
        >
          {(props) => <DrawersScreens {...props} style={animatedStyle} />}
        </AppDrawer.Screen>
        <AppDrawer.Screen name="Settings" component={SettingsScreen} />
      </AppDrawer.Navigator>
    </View>
  );
};

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
