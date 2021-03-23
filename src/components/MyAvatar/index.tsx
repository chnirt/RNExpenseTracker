import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {IMyAvatar} from './types';
import {styles} from './styles';

export const MyAvatar: FC<IMyAvatar> = ({index = 0, uri, size = 32, name}) => {
  // const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const colors = [
    // '#f5222d',
    // '#fa541c',
    // '#fa8c16',
    // '#fadb14',
    // '#a0d911',
    // '#52c41a',
    // '#1890ff',
    // '#2f54eb',
    '#722ed1',
    '#eb2f96',
  ];
  // while (colors.length < 100) {
  //   do {
  //     var color = Math.floor(Math.random() * 1000000 + 1);
  //   } while (colors.indexOf(color) >= 0);
  //   colors.push('#' + ('000000' + color.toString(16)).slice(-6));
  // }

  const formatName = name
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase())
    .join('');

  if (uri) {
    return (
      <Image
        style={{width: size, height: size, borderRadius: size}}
        source={{uri}}
      />
    );
  }

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors[index],
      }}>
      <Text style={[styles.nameText, {fontSize: size / 2}]}>{formatName}</Text>
    </View>
  );
};
