import {
  NavigationContainerRef,
  NavigationState,
  PartialState,
} from '@react-navigation/core';
import * as React from 'react';
import { RootStackTabScreens } from './params/RootStackParams';

export const navigatorRef: React.RefObject<NavigationContainerRef<any>> =
  React.createRef();

export function navigate(name: any, params?: any) {
  // redirect user to My Notifications screen if he is on a different screen
  if (
    navigatorRef.current?.getCurrentRoute()?.name !==
    RootStackTabScreens.HomeScreen
  ) {
    navigatorRef.current?.navigate(name, params);
  }
}
export function reset(state: PartialState<NavigationState> | NavigationState) {
  navigatorRef.current?.reset(state);
}
