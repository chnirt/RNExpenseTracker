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

import {RootStackScreen} from './src/routes';
import {AuthProvider} from './src/context';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootStackScreen />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
