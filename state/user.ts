import { atom } from 'recoil';

export const authUserAtom = atom<any>({
  key: 'authUserAtom',
  default: [],
});

export const dbUserAtom = atom<any>({
  key: 'dbUserAtom',
  default: null,
});

export const subAtom = atom({
  key: 'subAtom',
  default: '',
});
