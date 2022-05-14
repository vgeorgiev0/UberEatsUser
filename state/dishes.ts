import { atom, selector, selectorFamily } from 'recoil';
import { Dish } from '../src/models';

export const dishesAtom = atom<Dish[]>({
  key: 'dishesAtom',
  default: [],
});
