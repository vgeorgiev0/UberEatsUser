import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './stacks/RootStackNavigator';
import { navigatorRef } from './NavigatorRef';

const Navigator: React.FC = () => {
  return (
    <NavigationContainer ref={navigatorRef}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
