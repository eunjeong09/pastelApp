import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {Icon} from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import SettingScreen from './SettingScreen';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Calendar: {
    screen: CalendarScreen,
  },
  Setting: {
    screen: SettingScreen,
  },
});
export default createAppContainer(TabNavigator);
