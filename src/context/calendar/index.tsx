import React, {createContext, useContext, useState} from 'react';
import {Alert, Modal, View, TouchableWithoutFeedback} from 'react-native';
import {CalendarList} from 'react-native-calendars';

import {styles} from './styles';
import {ICalendarProvider} from './types';
import {WINDOW_FONT_SCALE} from '../../constants';

const CalendarContext = createContext({
  toggle: () => {},
});

export const CalendarProvider = ({children}: ICalendarProvider) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggle = () => setModalVisible((prevState) => !prevState);

  const handleClose = () => setModalVisible(false);

  return (
    <CalendarContext.Provider value={{toggle}}>
      {children}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={handleClose}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>

          <View style={styles.modalView}>
            <CalendarList
              // Enable horizontal scrolling, default = false
              horizontal={true}
              // Enable paging on horizontal, default = false
              pagingEnabled={true}
              // Set custom calendarWidth.
              // calendarWidth={WINDOW_FONT_SCALE}
              calendarHeight={500}
              // ...calendarListParams
              // ...calendarParams
            />
          </View>
        </View>
      </Modal>
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
