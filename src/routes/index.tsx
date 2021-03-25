import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Animated, {Node} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

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
  PRIMARY_COLOR,
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
import {MyCustomDrawerContent, MyTabBar} from '../components';

import {styles} from './styles';
import {useShadow} from '../hooks';

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

const HomeScreen = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#FFFFFF',
    }}>
    <Text>Home</Text>
  </View>
);

const DrawersScreens = ({style}) => {
  return (
    <Animated.View
      style={[
        {justifyContent: 'center'},
        StyleSheet.flatten([styles.stack, style]),
      ]}>
      <MyTabs />
      <View
        style={{
          position: 'absolute',
          width: 30,
          height: '90%',
          backgroundColor: '#FFFFFF',
          right: -30,
        }}
      />
    </Animated.View>
  );
};

const AppDrawerScreen = () => {
  const [progress, setProgress] = React.useState<Node<number>>(
    new Animated.Value(0),
  );

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <LinearGradient
      style={styles.container}
      colors={[PRIMARY_COLOR, '#FFFFFF']}>
      <AppDrawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          drawerPosition: 'right',
          overlayColor: 'transparent',
          drawerStyle: styles.drawerStyles,
          // contentContainerStyle: {flex: 1},
          // drawerContentOptions: {
          //   activeBackgroundColor: 'transparent',
          //   activeTintColor: 'white',
          //   inactiveTintColor: 'white',
          // },
          sceneContainerStyle: {backgroundColor: 'transparent'},
        }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <MyCustomDrawerContent {...props} />;
        }}>
        <AppDrawer.Screen name={MY_TABS}>
          {(props) => <DrawersScreens {...props} style={animatedStyle} />}
        </AppDrawer.Screen>
      </AppDrawer.Navigator>
    </LinearGradient>
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
