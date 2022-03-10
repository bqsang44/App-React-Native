import React from 'react';
import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Quiz from './screens/Quiz';
import AskScreen from './screens/AskScreen';

import SplashScreen from './screens/SplashScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={SplashScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AskScreen" component={AskScreen} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
