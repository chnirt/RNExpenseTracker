import React, {useRef, useState} from 'react';
import {View, FlatList, Animated, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';

import {IOnboardingScreen} from './types';
import {styles} from './styles';
import {
  AUTH_STACK,
  PRIMARY_COLOR,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../../constants';
import {MyText} from '../../components';
import {
  PersonalFinanceSVG,
  SavingsSVG,
  ExpenseTrackerSVG,
  RichSVG,
} from '../../assets/svgs';
import {useOnboarding} from '../../context';

const DATA = [
  {
    id: '1',
    title: 'Personal Finance',
    description:
      "Every time you borrow money, you're robbing your future self.",
    image: <PersonalFinanceSVG height={300} />,
  },
  {
    id: '2',
    title: 'Saving Money',
    description:
      'Do not save what is left after spending, but spend what is left after saving',
    image: <SavingsSVG height={300} />,
  },
  {
    id: '3',
    title: 'Income',
    description:
      'I am indeed rich, since my income is superior to my expenses, and my expense is equal to my wishes.',
    image: <RichSVG height={300} />,
  },
  {
    id: '4',
    title: 'Expense tracker',
    description:
      'Control your expenses better than your competition. This is where you can always find the competitive advantage.',
    image: <ExpenseTrackerSVG height={300} />,
  },
];

export function OnboardingScreen(props: IOnboardingScreen) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const {skip} = useOnboarding();

  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const handleSkip = () => {
    skip();
    navigation.navigate(AUTH_STACK);
  };

  const OnboardingItem = ({item}) => {
    return (
      <View
        style={[
          styles.container,
          {width: WINDOW_WIDTH, height: WINDOW_HEIGHT},
        ]}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {item.image}
        </View>
        <View style={{flex: 1}}>
          <MyText
            style={{textAlign: 'center', marginBottom: 16}}
            h5
            bold
            color={PRIMARY_COLOR}>
            {item.title}
          </MyText>
          <MyText
            style={{textAlign: 'center', paddingHorizontal: 64}}
            p
            color="#000000">
            {item.description}
          </MyText>
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[PRIMARY_COLOR, '#FFFFFF']}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <Pressable style={{padding: 16}} onPress={handleSkip}>
            <MyText button bold color="#FFFFFF">
              Skip
            </MyText>
          </Pressable>
        </View>

        <View style={{flex: 10}}>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={OnboardingItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollX},
                  },
                },
              ],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {DATA.map((_, index) => {
            const inputRange = [
              (index - 1) * WINDOW_WIDTH,
              index * WINDOW_WIDTH,
              (index + 1) * WINDOW_WIDTH,
            ];

            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 30, 10],
              extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={index}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  width: dotWidth,
                  height: 10,
                  borderRadius: 10 / 2,
                  marginRight: 10,
                  opacity,
                }}
              />
            );
          })}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
