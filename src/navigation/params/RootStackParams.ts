import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type NestedRouteParams<T> = {
  [K in keyof T]: undefined extends T[K]
    ? { screen: K; params?: T[K] }
    : { screen: K; params: T[K] };
}[keyof T];

export enum RootStackTabScreens {
  HomeScreen = 'HomeScreen',
  OrderDetails = 'OrderDetails',
  Root = 'Root',
  ProfileTab = 'ProfileTab',
}

type TabParamList = {
  [RootStackTabScreens.HomeScreen]: undefined;
  [RootStackTabScreens.OrderDetails]: undefined;
  [RootStackTabScreens.Root]: undefined;
  [RootStackTabScreens.ProfileTab]: undefined;
};

export enum RootStackScreens {
  RestaurantDetails = 'RestaurantDetails',
  Root = 'Root',
  Welcome = 'Welcome',
  Dish = 'DishScreen',
  Profile = 'Profile',
  Basket = 'Basket',
  OrdersScreen = 'OrdersScreen',
  Restaurants = 'Restaurants',
  OrderDetailScreen = 'OrderDetailScreen',
}

// 1. List of screens used inside of stack with related route params defined as type.
export type RootStackParamList = {
  [RootStackScreens.Profile]: undefined;
  [RootStackScreens.Root]: undefined;
  [RootStackScreens.RestaurantDetails]: { id: string };
  [RootStackScreens.Welcome]: undefined;
  [RootStackScreens.Dish]: { id: string };
  [RootStackScreens.Basket]: NestedRouteParams<TabParamList>;
  [RootStackScreens.OrdersScreen]: undefined;
  [RootStackScreens.OrderDetailScreen]: undefined;
  [RootStackScreens.Restaurants]: undefined;
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
