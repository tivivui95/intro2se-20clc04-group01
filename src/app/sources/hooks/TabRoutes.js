import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import ViewProfile from '../screens/ViewProfile';
import Search from '../screens/Search'

import Colors from '../../constants/Colors';

function MainTabs({ navigation }) {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: Colors.vivaMagenta,
        tabBarStyle: { height: 58 }
    }}
      initialRouteName="Home"
      >
        <Tab.Screen 
            name="Search" 
            component={Search} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                <Feather name="search" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                <Feather name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
            name="Profile" 
            component={ViewProfile} 
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                <Feather name="user" color={color} size={size} />
                )
            }}
        />
    </Tab.Navigator>
  );
}

export default MainTabs;