import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './sources/screens/Home';
import Login from './sources/screens/Login';
import Signup from './sources/screens/Signup';
import HomeScreen from './sources/screens/HomeScreen';
import ViewExercises from './sources/screens/ViewExercises';
import ViewProfile from './sources/screens/ViewProfile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ViewExercises" component={ViewExercises} />
        <Stack.Screen name="ViewProfile" component={ViewProfile} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;