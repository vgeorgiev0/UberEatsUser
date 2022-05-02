import { Dishes } from './dishes';

export type Restaurant = {
  id?: string;
  name?: string;
  deliveryFee?: number;
  maxDeliveryTime?: number;
  minDeliveryTime?: number;
  rating?: number;
  image?: string;
  dishes?: Dishes[];
  address?: string;
  lat?: number;
  lng?: number;
  createdAt?: string;
  updatedAt?: string;
};
