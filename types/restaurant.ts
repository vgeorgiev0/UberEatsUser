export type Dishes = {
  name?: string;
  description?: string;
  price?: number;
  image?: string;
};

export type Restaurant = {
  id?: string;
  name?: string;
  deliveryFee?: number;
  maxDeliveryTime?: number;
  minDeliveryTime?: number;
  rating?: number;
  image?: string;
  dishes?: Dishes[];
};
