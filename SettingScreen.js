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
class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <Text>Setting</Text>
        <View>
          <Text>색 지정하기</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap:{
    flex:1
  }
})

export default SettingScreen;
