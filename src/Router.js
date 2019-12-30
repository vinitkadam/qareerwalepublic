import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { FluidNavigator } from 'react-navigation-fluid-transitions'
import { createSwitchNavigator, withFadeTransition } from 'react-navigation-switch-transitioner'

import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
    createDrawerNavigator,
    DrawerItems
} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import LoginSignUp from './containers/Auth/LoginSignUp';
import HomeScreen from './containers/HomeScreen';
import DMIT from './containers/DMIT';
import Profile from './containers/Profile';
import Appointments from './containers/Appointments';
import CourseInformation from './containers/CourseInformation';
import About from './containers/About';
import RequestFeature from './containers/RequestFeature';
import AppointmentConfirmed from './containers/AppointmentConfirmed';
import CarrerDropDown from './containers/CarrerDropDown';
import SignUpOtp from './containers/Auth/SignUpOtp';
import { Transition } from 'react-native-reanimated';

const AppStackNavigator = FluidNavigator({
    home: HomeScreen,
    dmit: DMIT,
    profile: Profile,
    appointments: Appointments,
    courseInformation: CourseInformation,
    about: About,
    requestFeature: RequestFeature,
    appointmentConfirmed: AppointmentConfirmed,
    carrerDropDown: CarrerDropDown,
}, {
    headerMode: 'none',
    // initialRouteName: 'courseInformation',
    // transitionConfig: NavigationConfig
});

const LoginSignUpNavigator = FluidNavigator({
    loginSignUp: LoginSignUp,
    carrerDropDown: CarrerDropDown,
    signUpOtp: SignUpOtp
}, {
    // initialRouteName: 'signUpOtp'
})

const MainNavigator = createAnimatedSwitchNavigator(
    {
        login: LoginSignUpNavigator,
        app: AppStackNavigator,
    },
    {
        // The previous screen will slide to the bottom while the next screen will fade in
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="fade"
                    durationMs={200}
                />
                <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
        ),
    }
);

const RouterContainer = createAppContainer(MainNavigator)

export default RouterContainer;