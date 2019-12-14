import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { FluidNavigator } from 'react-navigation-fluid-transitions'
import { 
    createStackNavigator, 
    createBottomTabNavigator,
    createSwitchNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
    createDrawerNavigator,
    DrawerItems
} from 'react-navigation';
import LoginSignUp from './containers/LoginSignUp';
import HomeScreen from './containers/HomeScreen';
import DMIT from './containers/DMIT';

const AppStackNavigator = FluidNavigator({
    loginPage: LoginSignUp,
    dmit: DMIT
});


const MainNavigator = createSwitchNavigator({
    login: AppStackNavigator,
    app: HomeScreen
},
{
headerMode: 'none',
initialRouteName: 'login'
});

const RouterContainer = createAppContainer(MainNavigator)

export default RouterContainer;