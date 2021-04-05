import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Animated,
  Dimensions,
  Text,
  ImageBackground,
} from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';

import {IMyLoopList} from './types';
import {styles} from './styles';
import {VisaSVG} from '../../assets/svgs';

const {width} = Dimensions.get('screen');

const SPACING = 10;
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 0.65;
const VISIBLE_ITEMS = 3;
const LOGO_SIZE = 70;

export function MyLoopList(props: IMyLoopList) {
  const {data: newData} = props;
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const [data, setData] = useState(newData);
  const [index, setIndex] = useState(0);
  const setActiveIndex = useCallback(
    (activeIndex) => {
      scrollXIndex.setValue(activeIndex);
      setIndex(activeIndex);
    },
    [index],
  );

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  useEffect(() => {
    if (index === data.length - VISIBLE_ITEMS - 1) {
      // get new data
      // fetch more data
      const newData = [...data, ...data];
      setData(newData);
    }
  });

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}>
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => String(index)}
          horizontal
          inverted
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: SPACING * 2,
            marginTop: 50,
          }}
          scrollEnabled={false}
          removeClippedSubviews={false}
          CellRendererComponent={({item, index, children, style, ...props}) => {
            const newStyle = [style, {zIndex: data.length - index}];
            return (
              <View style={newStyle} index={index} {...props}>
                {children}
              </View>
            );
          }}
          renderItem={({item, index}) => {
            const inputRange = [index - 1, index, index + 1];
            const translateX = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [50, 0, -100],
            });
            const scale = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [0.8, 1, 1.3],
            });
            const opacity = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
            });

            return (
              <Animated.View
                style={{
                  position: 'absolute',
                  left: -ITEM_WIDTH / 2,
                  opacity,
                  transform: [
                    {
                      translateX,
                    },
                    {scale},
                  ],
                }}>
                <ImageBackground
                  source={{uri: item.poster}}
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    padding: 16,
                  }}
                  imageStyle={{borderRadius: 16}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      SC BANK
                    </Text>
                    <VisaSVG
                      fill="#FFFFFF"
                      width={LOGO_SIZE}
                      height={LOGO_SIZE}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    {[...Array(3).keys()].map((element) => (
                      <Text
                        style={{
                          color: '#FFFFFF',
                          fontSize: 28,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        ****
                      </Text>
                    ))}
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 28,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      6789
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 24,
                        fontWeight: 'bold',
                      }}>
                      Trinh Chin Chin
                    </Text>
                  </View>
                </ImageBackground>
              </Animated.View>
            );
          }}
        />
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}
