import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import SettingScreen from './SettingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Calendar: CalendarScreen,
//   Setting: SettingScreen,
// });

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    path: './HomeScreen',
    navigationOptions: {
      title: 'Home',
      tabBarLabel: 'Home',
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          const {routeName} = navigation.state;
          if (routeName === 'Home') {
            return <Icon name="rocket" size={30} color="#900" />;
          } else if (routeName === 'CalendarScreen') {
            return <Icon name="rocket" size={30} color="#900" />;
          }
          return null;
        },
      }),
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
      },

      // tabBarIcon: () =>(
      //   <Icon
      //     name="rocket" size={30} color="#900"
      //   />
      // )
    },
  },
  Calendar: {
    screen: CalendarScreen,
    path: './CalendarScreen',
  },
  Setting: {
    screen: SettingScreen,
    path: './SettingScreen',
  },
});

export default createAppContainer(TabNavigator);

// const MyTabs = () => {
//   return(
//      <Tab.Navigator>
//        <Tab.Screen name="Home" component={HomeScreen} />
//        <Tab.Screen name="Settings" component={SettingScreen} />
//      </Tab.Navigator>);
//  }

// export default MyTabs;
