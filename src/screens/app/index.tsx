import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

import {IAppScreen} from './types';
import {styles} from './styles';
import {useAuth} from '../../context';
import {MyButton} from '../../components';
import {useNavigation} from '@react-navigation/core';
// import {useShadow} from '../../hooks';
// import {PRIMARY_COLOR} from '../../constants';

const DATA = [...Array(30).keys()].map((_, i) => ({
  id: i.toString(),
  title: 'chin' + i,
}));

export function AppScreen(props: IAppScreen) {
  const {logout} = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        // ...useShadow({depth: 24, color: PRIMARY_COLOR}),
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={DATA}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 10,
                marginBottom: 10,
              }}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[1, 6, 13, 20]}
      /> */}
      <MyButton onPress={logout} primary>
        Log out
      </MyButton>
    </View>
  );
}
