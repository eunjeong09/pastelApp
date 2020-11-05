import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import SettingScreen from './SettingScreen';


function ExampleView(props) {
  return <Icon name="ios-person" size={30} color="#4F8EF7" />;
}
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  

  Calendar:CalendarScreen,
  Setting: SettingScreen,
});
export default createAppContainer(TabNavigator);
