/**
 * @summary 앱의 가장 메인이 되는 페이지
 * 2020.10.06
 */

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

// const Main = () => {
class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      selectedColor: '#eee',
    };
  }

  getToday = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + '.' + month + '.' + date; //yyyy.mm.dd
  };

  changeColor = (color) => {
    this.setState({selectedColor: color});
    //전역변수로 css 수정하기
  };

  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.dateArea}>
          <Text style={styles.date}>{this.getToday()}</Text>
        </View>

        <View style={styles.titleArea}>
          <Text style={styles.title}>오늘 당신의 기분은 어떤 색인가요?</Text>
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
                this.changeColor('#fb9da7');
              }
            }}
          />
          <TouchableOpacity
            style={[styles.colorList, {backgroundColor: '#fcccd4'}]}
            onPress={() => {
              // alert(this.state.selectedColor);
              {
                this.changeColor('#fcccd4');
              }
            }}
          />
          <TouchableOpacity
            style={[styles.colorList, {backgroundColor: '#fbdea2'}]}
            onPress={() => {
              // alert(this.state.selectedColor);
              {
                this.changeColor('#fbdea2');
              }
            }}
          />
          <TouchableOpacity
            style={[styles.colorList, {backgroundColor: '#f2e2c6'}]}
            onPress={() => {
              // alert(this.state.selectedColor);
              {
                this.changeColor('#f2e2c6');
              }
            }}
          />
          <TouchableOpacity
            style={[styles.colorList, {backgroundColor: '#8eb695'}]}
            onPress={() => {
              // alert(this.state.selectedColor);
              {
                this.changeColor('#8eb695');
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
