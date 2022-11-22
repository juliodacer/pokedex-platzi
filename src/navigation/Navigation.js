import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import Pokedex from '../screens/Pokedex';
import Favorite from '../screens/Favorite';

//Boton tab navigation
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Pokedex' component={Pokedex} />
      <Tab.Screen name='Account' component={Account} />
      <Tab.Screen name='Favorite' component={Favorite} />
    </Tab.Navigator>
  )
}

export default Navigation;