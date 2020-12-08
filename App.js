import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import SettingScreen from './SettingScreen';
import {Text, AsyncStorage} from 'react-native';
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
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon focused={focused} name="home" size={25} color={ tintColor }/>
        )
      }
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        tabBarLabel: 'Calendar', 
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon focused={focused} name="calendar" size={25} color={ tintColor }/>
        )
      }
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: 'Setting', 
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon focused={focused} name="cog" size={25} color={ tintColor }/>
        )
      }
    },
  },
  // {
  //   tabBarPosition: 'bottom',
  //   animationEnabled: false,
  //   swipeEnabled: false,
    
  // },
  {
    tabBarOptions: {
        activeTintColor: 'green', 
        inactiveTintColor: 'grey'
    }
  }
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
