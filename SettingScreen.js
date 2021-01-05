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

// const Main = () => {
class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        {/* <Text>Setting</Text> */}
        <ColorPicker
          onColorSelected={(color) => alert(`Color selected: ${color}`)}
          style={styles.colorPicker}
        />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    marginTop:0.3,
    flex: 1,
  },
  colorPicker:{
    flex:0.5,
    marginTop:80,
  },
  text: {
    // flex: 0.5,
    backgroundColor: 'pink',
    justifyContent: 'flex-end',
  },
});

export default SettingScreen;
