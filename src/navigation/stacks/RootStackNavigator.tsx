import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreens,
} from '../params/RootStackParams';

import RestaurantDetailsScreen from '../../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../../screens/DishDetailsScreen';
import Basket from '../../screens/Basket';
import OrdersScreen from '../../screens/OrdersScreen';
import OrderDetails from '../../screens/OrderDetails';
import OrderTabs from '../tabs/OrdersTabs';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootStackScreens.Welcome}
          component={OrderTabs}
        />
        <RootStack.Screen
          name={RootStackScreens.Dish}
          component={DishDetailsScreen}
        />
        <RootStack.Screen
          name={RootStackScreens.RestaurantDetails}
          component={RestaurantDetailsScreen}
        />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          name={RootStackScreens.OrdersScreen}
          component={OrdersScreen}
        />
        <RootStack.Screen
          name={RootStackScreens.NotificationDetails}
          component={OrderDetails}
        />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen name={RootStackScreens.Basket} component={Basket} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
