import { atom, selector, selectorFamily } from 'recoil';
import { Dish } from '../src/models';
import { getRestaurantDishes } from './restaurants';

export const dishesAtom = atom<Dish[]>({
  key: 'dishesAtom',
  default: [],
});

export const getSelectedDish = selectorFamily({
  key: 'getSelectedDish',
  get:
    (dishID) =>
    ({ get }) => {
      const dishes = get(getRestaurantDishes(dishID));
      return dishes.filter((dish) => dish.id === dishID);
    },
});
