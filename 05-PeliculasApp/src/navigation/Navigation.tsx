import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInteface';
import { FadeScreen } from '../screens/FadeScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
  FadeScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="FadeScreen" component={FadeScreen} />
    </Stack.Navigator>
  );
}