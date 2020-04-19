import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import FriendScreen from './screens/FriendScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Feather } from '@expo/vector-icons';

const HomeStack = createStackNavigator({ HomeScreen, FriendScreen }, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'aliceblue'
        }
    }
});

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Freunde',
            tabBarIcon: ({ tintColor }) => (
                <Feather name="home" size={24} color={tintColor} />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            title: 'Einstellung',
            tabBarIcon: ({ tintColor }) => (
                <Feather name="settings" size={24} color={tintColor} />
            )
        }
    }
},
    {
        tabBarOptions: {
            activeTintColor: 'darkorange',
            style: {
                backgroundColor: 'aliceblue'
            }
        }
    });

export default createAppContainer(TabNavigator);
