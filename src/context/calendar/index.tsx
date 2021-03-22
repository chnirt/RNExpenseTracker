import React, {createContext, useContext, useState} from 'react';
import {Modal, View, TouchableWithoutFeedback} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import moment from 'moment';

import {styles} from './styles';
import {ICalendarContext, ICalendarProvider} from './types';
import {PRIMARY80_COLOR, PRIMARY_COLOR} from '../../constants';
import {dateRange} from '../../utils';

const CalendarContext = createContext<ICalendarContext>({
  calendarStart: new Date(),
  calendarEnd: new Date(),
  toggle: () => {},
});

const markedDatesStyle = {
  selected: true,
  color: PRIMARY_COLOR,
  textColor: '#FFFFFF',
};

export const CalendarProvider = ({children}: ICalendarProvider) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [calendarStart, setCalendarStart] = useState<Date | null>(null);
  const [calendarEnd, setCalendarEnd] = useState<Date | null>(null);

  const toggle = () => setModalVisible((prevState) => !prevState);

  const handleDayPress = (date: any) => {
    const startDate = Object.keys(markedDates).find(
      (key) => markedDates[key]?.startingDay === true,
    );
    const endDate = Object.keys(markedDates).find(
      (key) =>
        markedDates[key]?.index !== 0 && markedDates[key]?.endingDay === true,
    );

    if (!startDate) {
      setMarkedDates({
        [date?.dateString]: {
          index: 0,
          startingDay: true,
          endingDay: true,
          ...markedDatesStyle,
        },
      });
      return;
    }

    if (!endDate) {
      if (new Date(date?.dateString) <= new Date(startDate)) {
        setMarkedDates({
          [date?.dateString]: {
            index: 0,
            startingDay: true,
            endingDay: true,
            ...markedDatesStyle,
          },
        });
        return;
      }

      let dates = dateRange(new Date(startDate), new Date(date?.dateString));

      let markedDatesObject = {};

      dates
        .map((date) => moment(date).format('YYYY-MM-DD'))
        .forEach((date, i) => {
          Object.assign(markedDatesObject, {
            [date]: {
              index: i,
              ...markedDatesStyle,
              color:
                i === 0 || i === dates.length - 1
                  ? PRIMARY_COLOR
                  : PRIMARY80_COLOR,
              startingDay: i === 0,
              endingDay: i === dates.length - 1,
            },
          });
        });

      setMarkedDates(markedDatesObject);
      return;
    }

    if (startDate !== null && endDate !== null) {
      setMarkedDates({
        [date?.dateString]: {
          index: 0,
          startingDay: true,
          endingDay: true,
          ...markedDatesStyle,
        },
      });
      return;
    }
  };

  const handleClose = () => {
    const markedDatesArray = Object.keys(markedDates);
    const cloneMarkedDatesArray = JSON.parse(JSON.stringify(markedDatesArray));
    const start = cloneMarkedDatesArray[0]
      ? new Date(cloneMarkedDatesArray[0])
      : new Date();
    const end = cloneMarkedDatesArray[cloneMarkedDatesArray.length - 1]
      ? new Date(cloneMarkedDatesArray[cloneMarkedDatesArray.length - 1])
      : new Date();

    setCalendarStart(start);
    setCalendarEnd(end);

    setModalVisible(false);
  };

  return (
    <CalendarContext.Provider value={{calendarStart, calendarEnd, toggle}}>
      {children}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}>
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
              //  calendarWidth={320}
              // ...calendarListParams
              // ...calendarParams

              markedDates={markedDates}
              markingType={'period'}
              // Initially visible month. Default = Date()
              // current={'2021-03-01'}
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              // minDate={'2021-03-05'}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              // maxDate={'2021-03-30'}
              // Handler which gets executed on day press. Default = undefined
              onDayPress={(day) => {
                // console.log('selected day', day);
                handleDayPress(day);
              }}
              // Handler which gets executed on day long press. Default = undefined
              onDayLongPress={(day) => {
                // console.log('selected day', day);
              }}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              // monthFormat={'yyyy MM'}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              onMonthChange={(month) => {
                // console.log('month changed', month);
              }}
              // Hide month navigation arrows. Default = false
              // hideArrows={true}
              // Replace default arrows with custom ones (direction can be 'left' or 'right')
              // renderArrow={(direction) => <Arrow />}
              // Do not show days of other months in month page. Default = false
              // hideExtraDays={true}
              // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
              // day from another month that is visible in calendar page. Default = false
              // disableMonthChange={true}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
              firstDay={1}
              // Hide day names. Default = false
              // hideDayNames={true}
              // Show week numbers to the left. Default = false
              // showWeekNumbers={true}
              // Handler which gets executed when press arrow icon left. It receive a callback can go back month
              onPressArrowLeft={(subtractMonth) => subtractMonth()}
              // Handler which gets executed when press arrow icon right. It receive a callback can go next month
              onPressArrowRight={(addMonth) => addMonth()}
              // Disable left arrow. Default = false
              // disableArrowLeft={true}
              // Disable right arrow. Default = false
              // disableArrowRight={true}
              // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
              // disableAllTouchEventsForDisabledDays={true}
              // Replace default month and year title with custom one. the function receive a date as parameter.
              // renderHeader={(date) => {
              //   /*Return JSX*/
              // }}
              // Enable the option to swipe between months. Default = false
              // enableSwipeMonths={true}
              // Specify style for calendar container element. Default = {}
              // style={{
              //   borderWidth: 1,
              //   borderColor: 'gray',
              //   height: 350,
              // }}
              // Specify theme properties to override specific styles for calendar parts. Default = {}
              theme={{
                'stylesheet.day.period': {
                  base: {
                    overflow: 'hidden',
                    height: 34,
                    alignItems: 'center',
                    width: 38,
                  },
                },
                // backgroundColor: '#ffffff',
                // calendarBackground: '#ffffff',
                // textSectionTitleColor: '#b6c1cd',
                // textSectionTitleDisabledColor: '#d9e1e8',
                // selectedDayBackgroundColor: '#00adf5',
                // selectedDayTextColor: '#ffffff',
                todayTextColor: PRIMARY_COLOR,
                // dayTextColor: '#2d4150',
                // textDisabledColor: '#d9e1e8',
                // dotColor: '#00adf5',
                // selectedDotColor: '#ffffff',
                // arrowColor: 'orange',
                // disabledArrowColor: '#d9e1e8',
                monthTextColor: PRIMARY_COLOR,
                indicatorColor: PRIMARY_COLOR,
                // textDayFontFamily: 'monospace',
                // textMonthFontFamily: 'monospace',
                // textDayHeaderFontFamily: 'monospace',
                // textDayFontWeight: '300',
                // textMonthFontWeight: 'bold',
                // textDayHeaderFontWeight: '300',
                // textDayFontSize: 16,
                // textMonthFontSize: 16,
                // textDayHeaderFontSize: 16,
              }}
            />
          </View>
        </View>
      </Modal>
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
