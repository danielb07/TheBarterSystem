import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import Exchange from '../screens/Exchange';
import HomeScreen from '../screens/HomeScreen';


export const AppTabNavigator = createBottomTabNavigator({
  
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon :   <Image source={require("../assets/home-icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "HomeScreen",
    }
  },
  BookRequest: {
    screen: Exchange,
    navigationOptions :{
      tabBarIcon :<Image source={require("../assets/ads-icon.png")} style={{width:20, height:20,}} />,
      tabBarLabel : "Exchange",
    }
  }
  
},
{
  initialRouteName:'HomeScreen'
});
