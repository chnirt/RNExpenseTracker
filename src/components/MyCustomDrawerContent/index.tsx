import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {IMyCustomDrawerContent} from './types';
import {useAuth} from '../../context';
import {
  CardSVG,
  CloseSVG,
  LogoutSVG,
  CurrencySVG,
  LanguageSVG,
} from '../../assets/svgs';
import {
  ICON_SIZE,
  PRIMARY_COLOR,
  THIRD_COLOR,
  WINDOW_HEIGHT,
} from '../../constants';
import {Pressable, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MyText} from '../MyText';
import {MoonSVG} from '../../assets/svgs/moon';

export function MyCustomDrawerContent({
  progress,
  navigation,
  ...rest
}: IMyCustomDrawerContent) {
  const {logout} = useAuth();

  const handleCloseDrawer = () => navigation.closeDrawer();

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'flex-start', paddingRight: 16}}>
      <View
        style={{
          height: '5%',
          alignItems: 'flex-end',
          justifyContent: 'center',
          // borderColor: 'orange',
          // borderWidth: 1,
        }}>
        <TouchableWithoutFeedback
          style={{padding: 16}}
          onPress={handleCloseDrawer}>
          <CloseSVG
            fill={'#FFFFFF'}
            width={ICON_SIZE / 2}
            height={ICON_SIZE / 2}
          />
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          height: '10%',
          alignItems: 'flex-end',
          // borderColor: 'orange',
          // borderWidth: 1,
        }}>
        <MyText h5 color="#FFFFFF">
          Hello,
        </MyText>
        <MyText h5 color="#FFFFFF">
          Chin Trinh
        </MyText>
      </View>
      <View
        style={{
          height: '70%',
          // borderColor: 'orange',
          // borderWidth: 1,
        }}>
        <DrawerContentScrollView
          {...rest}
          scrollEnabled={false}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'space-between',
            paddingTop: 0,
            // borderColor: 'orange',
            // borderWidth: 1,
          }}>
          <View
            style={
              {
                // borderColor: 'red',
                // borderWidth: 1,
              }
            }>
            <DrawerItem
              label="Currency"
              labelStyle={{
                color: '#FFFFFF',
                fontSize: 14,
                marginLeft: -16,
              }}
              icon={() => (
                <CurrencySVG fill={'#FFFFFF'} width={24} height={24} />
              )}
              onPress={() => {}}
            />
            <DrawerItem
              style={{}}
              label="Language"
              labelStyle={{color: '#FFFFFF', fontSize: 14, marginLeft: -16}}
              icon={() => (
                <LanguageSVG fill={'#FFFFFF'} width={24} height={24} />
              )}
              onPress={() => {}}
            />
            <DrawerItem
              label="Dark mode"
              labelStyle={{color: '#FFFFFF', fontSize: 14, marginLeft: -16}}
              icon={() => <MoonSVG fill={'#FFFFFF'} width={24} height={24} />}
              onPress={() => {}}
            />
          </View>
          <View
            style={
              {
                // borderColor: 'orange',
                // borderWidth: 1,
              }
            }>
            <DrawerItem
              label="Logout"
              labelStyle={{
                color: PRIMARY_COLOR,
                fontSize: 14,
                marginLeft: -16,
              }}
              icon={() => (
                <LogoutSVG fill={PRIMARY_COLOR} width={24} height={24} />
              )}
              onPress={logout}
            />
          </View>
        </DrawerContentScrollView>
      </View>
    </SafeAreaView>
  );
}
