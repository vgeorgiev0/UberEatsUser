import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreens,
} from '../params/RootStackParams';

import RestaurantDetailsScreen from '../../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../../screens/DishDetailsScreen';
import Basket from '../../screens/Basket';
import HomeScreen from '../../screens/HomeScreen';

const HomeStack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name={RootStackScreens.Restaurants}
        component={HomeScreen}
      />
      <HomeStack.Screen
        name={RootStackScreens.RestaurantDetails}
        component={RestaurantDetailsScreen}
      />
      <HomeStack.Screen
        name={RootStackScreens.Profile}
        component={DishDetailsScreen}
      />
      <HomeStack.Screen name={RootStackScreens.Basket} component={Basket} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;