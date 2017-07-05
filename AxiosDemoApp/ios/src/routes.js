import React from 'react';
import {StackNavigator} from 'react-navigation';

  //Components
import Login from './component/login/login.js';
import Home from './component/home/home.js';

const Routes = StackNavigator ({
  //Screens Listing
  Login : {screen:Login},
  Home  : {screen:Home},

})
export default Routes;
