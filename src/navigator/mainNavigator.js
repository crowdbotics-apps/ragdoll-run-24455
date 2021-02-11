import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList203811Navigator from '../features/ArticleList203811/navigator';
import ArticleList203810Navigator from '../features/ArticleList203810/navigator';
import ArticleList203809Navigator from '../features/ArticleList203809/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList203811: { screen: ArticleList203811Navigator },
ArticleList203810: { screen: ArticleList203810Navigator },
ArticleList203809: { screen: ArticleList203809Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
