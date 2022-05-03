import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import RestaurantDetailsScreen from '../../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../../screens/DishDetailsScreen';
import OrdersScreen from '../../screens/OrdersScreen';
import { RootStackScreens } from '../params/RootStackParams';
import { Foundation, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const OrderTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f14',
        tabBarInactiveTintColor: '#696969',
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 18,
        },
      }}
      initialRouteName={RootStackScreens.HomePage}
    >
      <Tab.Screen
        name={RootStackScreens.HomePage}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Foundation name="home" size={25} color={color} />
            ) : (
              <Foundation name="home" size={22} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name={RootStackScreens.Dish}
        component={DishDetailsScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialIcons name="list-alt" size={24} color={color} />
            ) : (
              <MaterialIcons name="list-alt" size={24} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name={RootStackScreens.OrdersScreen}
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome5 name="user-alt" size={24} color={color} />
            ) : (
              <FontAwesome5 name="user-alt" size={24} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default OrderTabs;
