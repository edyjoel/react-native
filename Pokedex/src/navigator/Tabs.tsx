import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from './Tab1';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={{
        tabBarActiveTintColor: '#5856D5',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.82)',
          // marginBottom: 10, //( Platform.OS === 'ios') ? 0 : 10,
          borderWidth: 0,
          elevation: 0,
          height: 60,//( Platform.OS === 'ios') ? 70 : 80,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Tab1}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => (
            <Icon
              color={color}
              size={25}
              name="list-outline"
            />
          )
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Buscador',
          tabBarIcon: ({color}) => (
            <Icon
              color={color}
              size={25}
              name="search-outline"
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}