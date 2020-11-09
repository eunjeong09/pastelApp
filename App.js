import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import SettingScreen from './SettingScreen';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Calendar: CalendarScreen,
  Setting: SettingScreen,
});

// const TabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//     path: './HomeScreen',
//     navigationOptions: {
//       title: 'Switch 1',
//       tabBarLabel: 'Switch 1',
//       tabBarIcon: ({tintColor, focused}) => (
//         <Ionicons
//           name={focused ? 'ios-home' : 'ios-home'}
//           size={26}
//           style={{color: tintColor}}
//         />
//       ),
//     },
//   },
//   Calendar: {
//     screen: CalendarScreen,
//     path: './CalendarScreen',
//   },
//   Setting: {
//     screen: SettingScreen,
//   },
// });

export default createAppContainer(TabNavigator);

// const MyTabs = () => {
//   return(
//      <Tab.Navigator>
//        <Tab.Screen name="Home" component={HomeScreen} />
//        <Tab.Screen name="Settings" component={SettingScreen} />
//      </Tab.Navigator>);
//  }

// export default MyTabs;
