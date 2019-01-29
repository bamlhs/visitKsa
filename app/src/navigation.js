import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DashBoardScreen from './screens/DashBoardScreen';
import PlacesScreen from './screens/PlacesScreen';
import AddPlaceScreen from './screens/AddPlaceScreen';


const HomeStack = createStackNavigator({
    dash: DashBoardScreen,
    places: PlacesScreen,
    add: AddPlaceScreen
}, {
    initialRouteName: 'dash'
});


export default createAppContainer(HomeStack);