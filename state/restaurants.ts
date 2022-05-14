import { atom, selector, selectorFamily } from 'recoil';
import { Restaurant } from '../src/models';

export const restaurantsAtom = atom<Restaurant[]>({
  key: 'restaurantsAtom',
  default: [],
});

export const getSelectedRestaurantSelector = selectorFamily({
  key: 'getSelectedRestaurantSelector',
  get:
    (restaurantID) =>
    ({ get }) => {
      const allRestaurants = get(restaurantsAtom);
      return allRestaurants.find(
        (restaurant) => restaurant.id === restaurantID
      );
    },
});

// export const getRestaurantDishes = selectorFamily({
//   key: 'getRestaurantDishes',
//   get:
//     (restaurantID) =>
//     ({ get }) => {
//       const dishes = get(dishesAtom);
//       return dishes.filter((dish) => dish.restaurantID === restaurantID);
//     },
// });
