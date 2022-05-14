import { atom, selector, selectorFamily } from 'recoil';
import { Basket, Restaurant } from '../src/models';

export const basketAtom = atom<Basket>({
  key: 'basketAtom',
  default: undefined,
});

export const restaurantBasketAtom = atom<Restaurant | null>({
  key: 'restaurantBasketAtom',
  default: undefined,
});

// export const addDishToBasketSelectorFamily = selectorFamily({
//   key: 'addDishToBasketSelectorFamily',
//   get:
//     (dish) =>
//     ({ get }) => {},
// });
