import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreens,
} from '../params/RootStackParams';
import OrderTabs from '../tabs/OrdersTabs';
import { Restaurant } from '../../models';
import { DataStore } from 'aws-amplify';
import { useSetRecoilState } from 'recoil';
import { restaurantsAtom } from '../../../state/restaurants';
import { dishesAtom } from '../../../state/dishes';
import { Dish } from '../../models';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
  const setRestaurants = useSetRecoilState(restaurantsAtom);
  const setDishes = useSetRecoilState(dishesAtom);

  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
    DataStore.query(Dish).then(setDishes);
  }, []);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={RootStackScreens.Root} component={OrderTabs} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
