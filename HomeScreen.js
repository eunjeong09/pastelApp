/**
 * @summary 앱의 가장 메인이 되는 페이지
 * 2020.10.06
 */

import moment from 'moment';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

// const Main = () => {
class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      selectedColor: '#eee',
      selectedNumber: 0,
      today:null,
    };
  }

  getToday = () => {
    var date = new Date().getDate();

    var dateResult = date < 10 ? '0' + date : date;
    var month = new Date().getMonth() + 1;
    var monthResult = month < 10 ? '0' + month : month;
    var year = new Date().getFullYear();

    return year + '.' + monthResult + '.' + dateResult; //yyyy.mm.dd
  };

  changeColor = (color, num) => {
    
    this.setState({selectedColor: color});
    this.setState({selectedNumber: num});
    //전역변수로 css 수정하기
    // AsyncStorage.setItem('@pastel:color',JSON.stringify(this.state))
    
    var today = new Date();
    
    var format = Moment(today).format('YYYY-MM-D');
    this.setState({today : format});
    // this.setState({today:today});
    
    var newData = {color: color, date: format};
    
    // 오늘 날짜인 경우 덮어쓰기
    // AsyncStorage.setItem('data',JSON.stringify(data));
    
    AsyncStorage.getItem('data').then((data) => {
      // console.log(data);
      const c = data ? JSON.parse(data) : [];

      // map으로 배열을 돌리고, 오늘날짜랑 똑같으면 배열에서 지우고, push
      c.map((data, i) => {
        let thisData = JSON.parse(data);
        if(thisData.date === this.state.today){
          // data.splice(i,1);
          c.length = c.length -1;
        }
      });

      // c.push(JSON.stringify({'color':'#fb9da7','date':'2020-12-10'}));
      // c.push(JSON.stringify({'color':'#fbdea2','date':'2020-12-11'}));
      // c.push(JSON.stringify({'color':'#fcccd4','date':'2020-12-12'}));
      // c.push(JSON.stringify({'color':'#fb9da7','date':'2020-12-13'}));
      // c.push(JSON.stringify({'color':'#fb9da7','date':'2020-12-14'}));

      c.push(JSON.stringify(newData));
      AsyncStorage.setItem('data', JSON.stringify(c));
      
    });


    // AsyncStorage 초기화
    // AsyncStorage.clear();

    // alert('color : '+color+', num : '+num);
  };

  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.dateArea}>
          <Text style={styles.date}>{this.getToday()}</Text>
        </View>

        <View style={styles.titleArea}>
          <Text style={styles.title}>오늘 당신의 기분은 어떤 색인가요?</Text>
          {/* <Icon name="rocket" size={30} color="#900" /> */}
        </View>
        <View style={styles.todayColorWrap}>
          <View
            style={[
              styles.todayColor,
              {backgroundColor: this.state.selectedColor},
            ]}
          />
        </View>
        <View style={styles.colorListWrap}>
          <TouchableOpacity
            style={[styles.colorList, {backgroundColor: '#fb9da7'}]}
            onPress={() => {
              // alert(this.state.selectedColor);
              {
                this.changeColor('#fb9da7', 1);
              }
            }}
          />
          <TouchableOpacity
            style={[styles.colorList, {backgroundColor: '#fcccd4'}]}
            onPress={() => {
              // alert(this.state.selectedColor);
              {
                this.changeColor('#fcccd4', 2);
              }
            }}
          />
          <TouchableOpacity
            style={[styles.colorList, {backgroundColor: '#fbdea2'}]}
            onPress={() => {
              // alert(this.state.selectedColor);
              {
                this.changeColor('#fbdea2', 3);
              }
            }}
          />
          <TouchableOpacity
            style={[styles.colorList, {backgroundColor: '#f2e2c6'}]}
            onPress={() => {
              // alert(this.state.selectedColor);
              {
                this.changeColor('#f2e2c6', 4);
              }
            }}
          />
          <TouchableOpacity
            style={[styles.colorList, {backgroundColor: '#8eb695'}]}
            onPress={() => {
              // alert(this.state.selectedColor);
              {
                this.changeColor('#8eb695', 5);
              }
            }}
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
    // justifyContent: 'space-around',
  },
  dateArea: {
    flex: 0.5,
    justifyContent: 'flex-end',
    paddingTop: 70,
    paddingBottom: 50,
  },
  date: {
    fontSize: 30,
    textAlign: 'center',
  },
  titleArea: {
    // flex: 1,
    alignItems: 'center',
    marginBottom: 50,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayColorWrap: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayColor: {
    width: 250,
    height: 250,
    // backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 200,
  },
  colorListWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  colorList: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'black',
  },
});

export default HomeScreen;
