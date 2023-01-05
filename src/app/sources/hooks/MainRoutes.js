import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

import MainTabs from './TabRoutes';
import ChangePassword from '../screens/ChangePassword';
import ForgotPassword from '../screens/ForgotPassword';
import NotiReminder from '../screens/NotiReminder';
import ViewProfile from '../screens/ViewProfile';
import EnterBio from '../screens/EnterBio';
import EnterBioHW from '../screens/EnterBioHW';
import ViewExercises from '../screens/ViewExercises';
import EnrolledExercises from '../screens/EnrolledExercises';
import Search from '../screens/Search';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Search">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ViewProfile" component={ViewProfile} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="NotiReminder" component={NotiReminder} />
        <Stack.Screen name="ViewExercises" component={ViewExercises} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="EnterBioHW" component={EnterBioHW} />
        <Stack.Screen name="EnterBio" component={EnterBio} />
        <Stack.Screen name="EnrolledExercises" component={EnrolledExercises} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoutes;