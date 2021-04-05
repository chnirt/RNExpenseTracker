import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {IAppScreen} from './types';
import {styles} from './styles';
import {MyAvatar, MyText, MyLoopList} from '../../components';
import {SCREEN_BORDER_RADIUS} from '../../constants';

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

  return (
    <View style={styles.container}>
      <MyLoopList data={DATA} />
    </View>
  );
}
