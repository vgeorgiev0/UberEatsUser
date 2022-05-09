import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreens,
} from '../params/RootStackParams';
import OrderTabs from '../tabs/OrdersTabs';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={RootStackScreens.Root} component={OrderTabs} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
