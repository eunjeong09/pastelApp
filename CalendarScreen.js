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
import AsyncStorage from '@react-native-community/async-storage';


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
  constructor() {
    super();

    //로딩시에 무조건
    this.data = this.getStorage();

    this.state = {
      selectedColor: '#eee',
      selectedNumber:0,
    };
  }

  //저장소 불러오기
  getStorage = () =>  {
    AsyncStorage.getItem('@data').then((data)=> {
        // alert(data);
        console.log(data);
        console.log(data["colorNum"]);
        console.log(data.date);

        //아무것도 없으면 null
        
    });
  }

  


  //저장소 모든 내용 불러오기 - test 필요
  importData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
  
      // return result.map(req => JSON.parse(req)).forEach(console.log);
      return result.map(req => JSON.stringify(req)).forEach(console.log);
    } catch (error) {
      console.error(error)
    }
  }



  render() {
    // var test = this.importData();

    return (
      <View style={styles.wrap}>
        <Text>{this.getStorage()}</Text>
        <View style={{flex: 0.3}}></View>
        <View style={styles.calendarWrap}>
          <CalendarList
            style={styles.calendarArea}
            theme={{
              'stylesheet.day.basic': {
                // base: {
                //   height: 50,
                // },
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
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              // textDayFontSize: 16,
              // textMonthFontSize: 16,
              // textDayHeaderFontSize: 16

              
            }}
            pastScrollRange={50}
            monthFormat={'yyyy MM'}
            horizontal={true}
            pagingEnabled={true}
            // markedDates={markedDates}
            markedDates={
              {
                '2020-12-10': {selected: true, selectedColor: '#333',activeOpacity: 0,disableTouchEvent: true, startingDay:true, endingDay:true},
              }
            }
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
    width: '100%',
    // alignItems: 'center',
  },

  calendarArea: {
    backgroundColor: 'pink',
    width: '100%',
    height:500,
  },
});

export default CalendarScreen;
