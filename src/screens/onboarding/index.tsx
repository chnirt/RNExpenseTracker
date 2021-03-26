import React, {useRef, useState} from 'react';
import {View, Text, FlatList, Animated} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {IOnboardingScreen} from './types';
import {styles} from './styles';
import {
  PRIMARY_COLOR,
  THIRD_COLOR,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../../constants';
import invest from './Invest.svg';
import savingMoney from './SavingMoney.svg';
import earnRewards from './EarnRewards.svg';
import {MyText} from '../../components';

const DATA = [
  {
    id: '1',
    title: 'Invest',
    description: 'An investment in knowledge pays the best interest',
    xml: invest,
  },
  {
    id: '2',
    title: 'Saving Money',
    description:
      'Do not save what is left after spending, but spend what is left after saving',
    xml: savingMoney,
  },
  {
    id: '3',
    title: 'Earn Rewards',
    description:
      'Expect the best. Prepare for the worst. Capitalize on what comes',
    xml: earnRewards,
  },
];

export function OnboardingScreen(props: IOnboardingScreen) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const OnboardingItem = ({item}) => {
    return (
      <View
        style={[
          styles.container,
          {width: WINDOW_WIDTH, height: WINDOW_HEIGHT},
        ]}>
        <View style={{flex: 0.7}}>
          <SvgXml width={500} height={500} xml={item.xml} />
        </View>
        <View style={{flex: 0.3}}>
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
            color={THIRD_COLOR}>
            {item.description}
          </MyText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>OnboardingScreen</Text>
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
  );
}
