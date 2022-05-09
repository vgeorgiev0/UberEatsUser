import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrdersScreen from '../../screens/OrdersScreen';
import {
  RootStackScreens,
  RootStackTabScreens,
} from '../params/RootStackParams';
import { Foundation, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import HomeStackNavigator from '../stacks/HomeStackNavigator';
import OrderStackNavigator from '../stacks/OrderStackNavigator';

const Tab = createBottomTabNavigator();

const OrderTabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={RootStackScreens.Restaurants}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f14',
        tabBarInactiveTintColor: '#696969',
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 18,
        },
      }}
    >
      <Tab.Screen
        name={RootStackTabScreens.HomeScreen}
        component={HomeStackNavigator}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Foundation name="home" size={25} color={color} />
            ) : (
              <Foundation name="home" size={22} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name={RootStackTabScreens.OrderDetails}
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialIcons name="list-alt" size={25} color={color} />
            ) : (
              <MaterialIcons name="list-alt" size={22} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name={RootStackTabScreens.ProfileTab}
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome5 name="user-alt" size={25} color={color} />
            ) : (
              <FontAwesome5 name="user-alt" size={22} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default OrderTabs;
