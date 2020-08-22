// Types
import { Action } from '../types';

export type Current = number

export interface ICategories {
  current: Current
  list: Array<string>
}

// Constants
export const SWITCH_CATEGORY = 'SWITCH_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';

// Actions
export const switchCategory = (current: Current): Action<{ current: Current }> => ({
  type: SWITCH_CATEGORY,
  current,
});

export const setCategories = (categories: ICategories): Action<ICategories> => ({
  type: SET_CATEGORIES,
  ...categories,
});

// Selectors
export const getCategories = (state: {categories: ICategories}) => state.categories;

// Reducer
const DEFAULT_CATEGORIES: ICategories = {
  current: 0,
  list: null,
};

export const categories = (
  state = DEFAULT_CATEGORIES, { type, current, list }: Action<ICategories>,
): ICategories => {
  switch (type) {
    case SWITCH_CATEGORY:
      return current < state.list.length ? { ...state, current } : state;

    case SET_CATEGORIES:
      return { current, list };

    default:
      return state;
  }
};
