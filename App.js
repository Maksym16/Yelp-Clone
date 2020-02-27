import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreens from './src/screens/ResultsShowScreens'

const navigation = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreens,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigation)