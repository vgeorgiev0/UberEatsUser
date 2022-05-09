import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreens,
} from '../params/RootStackParams';

import DishDetailsScreen from '../../screens/DishDetailsScreen';
import Basket from '../../screens/Basket';
import OrdersScreen from '../../screens/OrdersScreen';
import OrderDetails from '../../screens/OrderDetails';

const OrderStack = createStackNavigator<RootStackParamList>();

const OrderStackNavigator: React.FC = () => {
  return (
    <OrderStack.Navigator screenOptions={{ headerShown: false }}>
      <OrderStack.Screen
        name={RootStackScreens.OrdersScreen}
        component={OrdersScreen}
      />
      <OrderStack.Screen
        name={RootStackScreens.OrderDetailScreen}
        component={OrderDetails}
      />
      <OrderStack.Screen
        name={RootStackScreens.Dish}
        component={DishDetailsScreen}
      />
      <OrderStack.Screen name={RootStackScreens.Basket} component={Basket} />
    </OrderStack.Navigator>
  );
};

export default OrderStackNavigator;
