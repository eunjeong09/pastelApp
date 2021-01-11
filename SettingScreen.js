/**
 * @summary 앱의 가장 메인이 되는 페이지
 * 2020.10.06
 */

import React, {Component} from 'react';
import {ColorPicker} from 'react-native-color-picker';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Feather';

import DB from './DbTest';

// const Main = () => {
class SettingScreen extends Component {
  constructor() {
    super();

    this.state = {
      nowIndex:0,
      colorList:[
        {color:'#fb9da7'},
        {color:'#fcccd4'},
        {color:'#fbdea2'},
        {color:'#f2e2c6'},
        {color:'#8eb695'}
      ]
    };
  }

  clickIndex(data){
    this.setState({nowIndex:data});
    
  }

  colorSelected = (selectedColor) => {
    //다른 곳을 클릭했을때는 null? int에서 다른 값으로 지정해야하나
    let index = this.state.nowIndex;  

    let thisColor = this.state.colorList[index];

    let tmp = [];
    this.state.colorList.map((key, e) => {

      if(e === index){
        key.color = selectedColor;
      }
      tmp.push(key);
    });

    this.setState({colorList:tmp});

  }


  render() {

    

    return (
      <View style={styles.wrap}>
        {/* <Text>Setting</Text> */}

        {/* 
        <ColorPicker
          // onColorSelected={(color) => alert(`Color selected: ${color}`)}
          onColorSelected={(color) => this.colorSelected(color)}
          style={styles.colorPicker}
        />
         */}
         
        <View style={styles.text}>
          <Text>파레트</Text>
        </View>

        <View>
          <DropDownPicker
            items={[
              {label: 'Item 1', value: 'item1'},
              {label: 'Item 2', value: 'item2'},
            ]}
            defaultIndex={0}
            containerStyle={{height: 40}}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />
        </View>

        {/* dropdown으로 color picker */}
        <View style={styles.colorListWrap}>
          {this.state.colorList.map((e, key) => {
              return (
                <TouchableOpacity key={key} style={[styles.colorList, {backgroundColor:e.color}]} 
                onPress={() => {this.clickIndex(key)}}/>
                  // onPress={this.clickIndex("abc")}
                // />

                );
            })}
        </View>
        <DB />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 0.3,
    flex: 1,
  },
  colorPicker: {
    flex: 0.5,
    marginTop: 80,
  },
  text: {
    // flex: 0.5,
    backgroundColor: 'pink',
    justifyContent: 'flex-end',
  },
  colorListWrap:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  colorList:{
    width: 50,
    height: 50,
    borderRadius: 50,
  }
});

export default SettingScreen;
