import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import SettingScreen from './SettingScreen';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Calendar: CalendarScreen,
//   Setting: SettingScreen,
// });

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home', 
        tabBarIcon: ({ tintColor }) => (
          <Icon name="rocket" size={30} color="#900" />
        )
      }


      
      // path: './HomeScreen',
      // navigationOptions: {
      //   title: 'Home',
      //   tabBarLabel: 'Home',
        // tabBarIcon: ({tintColor, focused}) => (
        //   // <Text>이유가뭘까</Text>
        //   <Icon name="rocket" size={30} color="#900" />
        // )
      // },
    },
    Calendar: {
      screen: CalendarScreen,
      path: './CalendarScreen',
    },
    Setting: {
      screen: SettingScreen,
      path: './SettingScreen',
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

export default createAppContainer(TabNavigator);

// const MyTabs = () => {
//   return(
//      <Tab.Navigator>
//        <Tab.Screen name="Home" component={HomeScreen} />
//        <Tab.Screen name="Settings" component={SettingScreen} />
//      </Tab.Navigator>);
//  }

// export default MyTabs;
