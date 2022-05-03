import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type NestedRouteParams<T> = {
  [K in keyof T]: undefined extends T[K]
    ? { screen: K; params?: T[K] }
    : { screen: K; params: T[K] };
}[keyof T];

export enum RootStackTabScreens {
  MyNotifications = 'My Notifications',
  Favourites = 'Favourites',
  Settings = 'Settings',
}

type TabParamList = {
  [RootStackTabScreens.MyNotifications]: undefined;
  [RootStackTabScreens.Favourites]: undefined;
  [RootStackTabScreens.Settings]: undefined;
};

export enum RootStackScreens {
  RestaurantDetails = 'RestaurantDetails',
  Welcome = 'Welcome',
  Dish = 'DishScreen',
  Basket = 'Basket',
  OrdersScreen = 'OrdersScreen',
  NotificationDetails = 'NotificationDetails',
  HomePage = 'HomePage',
}

// 1. List of screens used inside of stack with related route params defined as type.
export type RootStackParamList = {
  [RootStackScreens.RestaurantDetails]: undefined;
  [RootStackScreens.Welcome]: undefined;
  [RootStackScreens.Dish]: undefined;
  [RootStackScreens.Basket]: NestedRouteParams<TabParamList>;
  [RootStackScreens.OrdersScreen]: undefined;
  [RootStackScreens.NotificationDetails]: {
    documentSymbol: string;
    documentId: number;
  };
  [RootStackScreens.HomePage]: undefined;
};

// 2. Screen route parameters defined as interface
// export interface IWelcomeRouteProps {};
// export interface IPasswordResetRouteProps {};
// export interface INotificationListRouteProps {};

export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

// const HomeStackNavigator = () => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Restaurants" component={HomeScreen} />
//       <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
//       <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
//       <HomeStack.Screen name="Basket" component={Basket} />
//     </HomeStack.Navigator>
//   );
// };
