/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider, CalendarProvider} from './src/context';
import {RootStackScreen} from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CalendarProvider>
          <RootStackScreen />
        </CalendarProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
