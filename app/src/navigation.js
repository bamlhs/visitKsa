import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DashBoardScreen from './screens/DashBoardScreen';
import PlacesScreen from './screens/PlacesScreen';
import AddPlaceScreen from './screens/AddPlaceScreen';
import PlaceScreen from './screens/PlaceScreen';


const HomeStack = createStackNavigator({
    dash: DashBoardScreen,
    places: PlacesScreen,
    add: AddPlaceScreen,
    place: PlaceScreen
}, {
    initialRouteName: 'places',
    defaultNavigationOptions: {
       
        headerStyle: {
        }
    }
});


export default createAppContainer(HomeStack);