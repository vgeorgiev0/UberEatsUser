import { Restaurant } from './restaurant';
import { User } from './user';

export type Orders = {
  id: string;
  userID: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  orderRestaurantId: string;
  Restaurant: Restaurant;
  User: User;
};
