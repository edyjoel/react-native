import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { PokedexScreen } from "../screens/PokedexScreen";
import { RootStackParams } from "./Tab1";
import { SearchScreen } from '../screens/SearchScreen';

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab2.Screen name="HomeScreen" component={SearchScreen} />
      <Tab2.Screen name="PokedexScreen" component={PokedexScreen} />
    </Tab2.Navigator>
  );
}