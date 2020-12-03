/**
 * @summary 앱의 가장 메인이 되는 페이지
 * 2020.10.06
 */

import React, {Component} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

// const Main = () => {
class CalendarScreen extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        {/* <Text>Calendar</Text> */}
        <View style={{flex:0.3}}></View>
        <View style={styles.calendarWrap}>
          <CalendarList
          style={styles.calendarArea}
            theme={{
              'stylesheet.day.basic': {
                base: {
                  // width: 30,
                  height: 50,
                },
              },
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              // selectedDayBackgroundColor: '#00adf5',
              // selectedDayTextColor: '#ffffff',
              // todayTextColor: '#00adf5',
              // dayTextColor: '#2d4150',
              // textDisabledColor: '#d9e1e8',
              // dotColor: '#00adf5',
              // selectedDotColor: '#ffffff',
              // arrowColor: 'orange',
              // disabledArrowColor: '#d9e1e8',
              // monthTextColor: 'blue',
              // indicatorColor: 'blue',
              // textDayFontFamily: 'monospace',
              // textMonthFontFamily: 'monospace',
              // textDayHeaderFontFamily: 'monospace',
              // textDayFontWeight: '300',
              // textMonthFontWeight: 'bold',
              // textDayHeaderFontWeight: '300',
              // textDayFontSize: 16,
              // textMonthFontSize: 16,
              // textDayHeaderFontSize: 16
            }}
            pastScrollRange={50}
            monthFormat={'yyyy MM'}
            // Enable horizontal scrolling, default = false
            horizontal={true}
            // Enable paging on horizontal, default = false
            pagingEnabled={true}
            // Set custom calendarWidth.
            calendarWidth={370}
          />
        </View>
      </View>
    );
  }
}

// style
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },



  calendarWrap: {
    // backgroundColor: 'blue',
    flex: 1,
    width:'100%',
    // alignItems: 'center',
    
  },
  
  calendarArea: {
    backgroundColor: 'pink',
    width:'100%',
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
});

export default CalendarScreen;
