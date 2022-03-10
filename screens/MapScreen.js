import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AskScreen from './Quiz';

const Stack = createStackNavigator();

const MapScreen = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={HomeScreen} headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Ask" component={Quiz} />
    </Stack.Navigator>
  </NavigationContainer>
);
