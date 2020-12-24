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

  componentDidMount () {
    this.getStorage();
    this.getAll();

    //tab 클릭시 저장소 내용 불러오기
    this.props.navigation.addListener('willFocus', (route) => { //tab changed 
      this.getStorage();
      this.getAll();
    });
  } 
  
  constructor() {
    super();

    this.state = {
      result: null,
      updateDate:null
    };

  }

  //저장소 불러오기 -> 달력 색칠
  getStorage = async() => {
    await AsyncStorage.getItem('data').then((data) => {
      // alert(data);
      // let parse = JSON.parse(data);
      let parse = JSON.parse(data)[0];
      let color = parse["color"];
      let date = parse.date;
      console.log(parse);
      console.log(typeof(parse));
      // console.log(color);
      // console.log(date);

      //아무것도 없으면 null
      if (parse != null) {
        var test = {};
        test[date] = {
          selected: true,
          selectedColor: color,
          activeOpacity: 0,
          disableTouchEvent: true,
          startingDay: true,
          endingDay: true,
        };
        this.setState({result: test});
      }
    });
  };

  updateDate = () => {
    let update = new Date();

    this.setState({updateDate:update});
  }
  

  // 저장소 전체 내용 불러오기 -> 콘솔
  getAll = async() => {
    await AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, data) => {
        data.map((result, i, data) => {
          console.log({ [data[i][0]]: data[i][1] });
          return true;
        });
      });
    });
  }

  


  render() {
    const TabBar = Platform.OS === 'ios' ? View : Text;

    return (
      <View style={styles.wrap}>
        {/* <Text>{this.getStorage()}</Text> */}
        <View style={{flex: 0.3}}></View>
        <TabBar />
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

            markedDates={this.state.result}
            // markedDates={
            //   {
            //     '2020-12-10': {selected: true, selectedColor: '#333',activeOpacity: 0,disableTouchEvent: true, startingDay:true, endingDay:true},
            //   }
            // }
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
    height: 500,
  },
});

export default CalendarScreen;
