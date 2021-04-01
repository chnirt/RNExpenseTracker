import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Animated, {Node} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import {
  LOADING,
  ONBOARDING,
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
  SCREEN_BORDER_RADIUS,
  THIRD_COLOR,
} from '../constants';
import {
  LoadingScreen,
  LoginScreen,
  RegisterScreen,
  AppScreen,
  TransactionsScreen,
  CategoriesScreen,
  ExpenseScreen,
  OnboardingScreen,
} from '../screens';
import {useAuth, useOnboarding} from '../context';
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
      initialRouteName={TRANSACTIONS}
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        unmountOnBlur: true,
      }}
      sceneContainerStyle={{
        borderTopRightRadius: SCREEN_BORDER_RADIUS,
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

const DrawersScreens = ({style, besideStyle}) => {
  return (
    <Animated.View style={[StyleSheet.flatten([styles.stack, style])]}>
      <MyTabs />
      <Animated.View
        style={{
          position: 'absolute',
          width: SCREEN_BORDER_RADIUS * 2,
          height: '90%',
          backgroundColor: '#FFFFFF90',
          right: 0,
          zIndex: -1,
          borderTopRightRadius: SCREEN_BORDER_RADIUS,
          borderBottomRightRadius: SCREEN_BORDER_RADIUS,

          ...besideStyle,
        }}
      />
    </Animated.View>
  );
};

const AppDrawerScreen = () => {
  const [progress, setProgress] = React.useState<Node<number>>(
    new Animated.Value(0),
  );

  // const progress = useRef(new Animated.Value(0)).current;

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, SCREEN_BORDER_RADIUS * 2],
  });

  const rotate = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: ['0deg', '7deg'],
  });

  const animatedStyle = {
    transform: [
      {scale},
      {
        rotate,
      },
    ],
  };

  const besideAnimatedStyle = {
    transform: [
      {
        translateX,
      },
    ],
  };

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
          drawerContentContainerStyle: {
            flex: 1,
          },
          drawerActiveTintColor: PRIMARY_COLOR,
          drawerInactiveTintColor: THIRD_COLOR,
          drawerActiveBackgroundColor: 'transparent',
          sceneContainerStyle: {backgroundColor: 'transparent'},
        }}
        drawerContent={(props) => {
          // setProgress(props.progress);

          return <MyCustomDrawerContent {...props} />;
        }}>
        <AppDrawer.Screen name={MY_TABS}>
          {(props) => (
            <DrawersScreens
              {...props}
              style={animatedStyle}
              besideStyle={besideAnimatedStyle}
            />
          )}
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

const AuthStackScreen = () => {
  const {isViewed} = useOnboarding();

  return (
    <AuthStack.Navigator>
      {!isViewed && (
        <AuthStack.Screen name={ONBOARDING} component={OnboardingScreen} />
      )}
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
export function RootStackScreen() {
  const {initializing, isAuth} = useAuth();

  if (initializing) return <LoadingScreen />;

  return (
    <RootStack.Navigator mode="modal" screenOptions={{animationEnabled: false}}>
      {isAuth ? (
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
