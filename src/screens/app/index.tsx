import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {IAppScreen} from './types';
import {styles} from './styles';
import {MyAvatar, MyText, MyLoopList, MyDonut} from '../../components';
import {CardSVG} from '../../assets/svgs';

import {
  PRIMARY_COLOR,
  ICON_SIZE,
  INCOME_COLOR,
  EXPENSE_COLOR,
  SCREEN_BORDER_RADIUS,
  THIRD_COLOR,
} from '../../constants';

const DATA = [
  {
    title: 'Afro vibes',
    location: 'Mumbai, India',
    date: 'Nov 17th, 2020',
    poster:
      'https://images.pexels.com/photos/2719301/pexels-photo-2719301.jpeg?cs=srgb&dl=pexels-jv-buenconcejo-2719301.jpg&fm=jpg',
  },
  {
    title: 'Jungle Party',
    location: 'Unknown',
    date: 'Sept 3rd, 2020',
    poster:
      'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1367192.jpg&fm=jpg',
  },
  {
    title: '4th Of July',
    location: 'New York, USA',
    date: 'Oct 11th, 2020',
    poster:
      'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?cs=srgb&dl=pexels-valdemaras-d-1647962.jpg&fm=jpg',
  },
  {
    title: 'Summer festival',
    location: 'Bucharest, Romania',
    date: 'Aug 17th, 2020',
    poster:
      'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?cs=srgb&dl=pexels-sam-kolder-2387873.jpg&fm=jpg',
  },
  // {
  //   title: 'BBQ with friends',
  //   location: 'Prague, Czech Republic',
  //   date: 'Sept 11th, 2020',
  //   poster:
  //     'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
  // },
  // {
  //   title: 'Festival music',
  //   location: 'Berlin, Germany',
  //   date: 'Apr 21th, 2021',
  //   poster:
  //     'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
  // },
  // {
  //   title: 'Beach House',
  //   location: 'Liboa, Portugal',
  //   date: 'Aug 12th, 2020',
  //   poster:
  //     'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
  // },
];

const activities = [
  {
    uuid: '34wsf',
    logo: '',
    title: 'Food and drink',
    percent: 76,
  },
  {
    uuid: '34w3f',
    logo: '',
    title: 'Fashion',
    percent: 24,
  },
];

export function AppScreen(props: IAppScreen) {
  const navigation = useNavigation();

  const handleAvatar = () => navigation.openDrawer();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: SCREEN_BORDER_RADIUS,
      },
      headerTitle: () => <MyText h6>App</MyText>,
      headerRight: () => (
        <TouchableWithoutFeedback
          style={styles.headerLeftButton}
          onPress={handleAvatar}>
          <MyAvatar
            name="Chnirt"
            uri="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </TouchableWithoutFeedback>
      ),
    });
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.itemContent}>
        <MyDonut percentage={item?.percent} color={'tomato'}>
          <CardSVG fill={PRIMARY_COLOR} width={ICON_SIZE} height={ICON_SIZE} />
        </MyDonut>
        {/* <View style={styles.activityIcon}>
          <CardSVG fill={PRIMARY_COLOR} width={ICON_SIZE} height={ICON_SIZE} />
        </View> */}
        <Text style={styles.activityName}>{item?.title}</Text>
        <Text style={styles.activityPercent}>{`${item?.percent}%`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MyLoopList data={DATA} />
      <View style={styles.listActivity}>
        <View style={styles.titleContent}>
          <Text style={styles.titleLabel}>List Activity</Text>
          <Text style={styles.moreLabel}>See all</Text>
        </View>
        <View style={styles.activityTime}>
          <View style={{paddingHorizontal: 10}}>
            <Text>Mon</Text>
            <Text>19</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text>Tue</Text>
            <Text>20</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text>Wed</Text>
            <Text>21</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text>Thu</Text>
            <Text>22</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text>Fri</Text>
            <Text>23</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text>Sat</Text>
            <Text>24</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text>Sun</Text>
            <Text>25</Text>
          </View>
        </View>
        <View style={styles.listContent}>
          <FlatList
            data={activities || []}
            renderItem={renderItem}
            keyExtractor={(item) => item.uuid}
          />
        </View>
      </View>
    </View>
  );
}
