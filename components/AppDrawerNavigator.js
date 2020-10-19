import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer';
import {Icon} from 'react-native-elements'
import customSideBarMenu from './customSideBarMenu'
import { BottomNavigator } from './BottomNavigator';
import  settings  from './settings';

import LoginScreen from '../screens/LoginScreen'
import MyBarters from '../screens/MyBarters'
import NotificationScreen from '../screens/NotificationScreen'
import MyRecievedItems from '../screens/MyRecievedItems'


export const AppDrawerNavigator = createDrawerNavigator(
 {
   Home:{
     screen:BottomNavigator,
      navigationOptions:{
       drawerIcon:<Icon name="home" type="font-awesome" />
     }
     },
  MyBarters : {
    screen : MyBarters,
    navigationOptions:{
       drawerIcon:<Icon name="gift" type="font-awesome" />
     }
    
  },
     
   Notification:{
     screen:NotificationScreen,
     navigationOptions:{
       drawerIcon:<Icon name="bell" type="font-awesome" />
     }
     },
   RecievedItems:{
     screen:MyRecievedItems,
     navigationOptions:{
       drawerIcon:<Icon name="gift" type="font-awesome" />
     }
    },
      Settings:{
     screen:settings,
     navigationOptions:{
       drawerIcon:<Icon name="settings" type="fontawesome5" />
     }
     },

 },
 {
        contentComponent: customSideBarMenu
    },
    {
        initialRouteName : "Home"
    }
 )