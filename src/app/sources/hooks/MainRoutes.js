import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

import MainTabs from './TabRoutes';
import ChangePassword from '../screens/ChangePassword';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createNativeStackNavigator();

function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ForgotPassword">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoutes;