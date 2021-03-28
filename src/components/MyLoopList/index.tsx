import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import {IMyLoopList} from './types';
import {styles} from './styles';

const ITEM_WIDTH = 400;
const ITEM_HEIGHT = 200;

export function MyLoopList(props: IMyLoopList) {
  const {data} = props;

  const LoopItem = ({item}) => {
    return (
      <View style={{}}>
        <Image
          source={{uri: item.url}}
          style={{width: ITEM_WIDTH, height: ITEM_HEIGHT}}
        />
      </View>
    );
  };
  return (
    <View style={styles.overflowContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        inverted
        // contentContainerStyle={{
        //   flex: 1,
        // }}
        renderItem={LoopItem}
      />
    </View>
  );
}
