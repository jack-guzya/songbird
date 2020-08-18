// Types
import { Current, ICategories } from './types';
import { Action } from '../types';

// Constants
export const SWITCH_CATEGORY = 'SWITCH_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';

// Actions
export const switchCategory = (
  current: Current,
): Action<{ current: Current }> => ({
  type: SWITCH_CATEGORY,
  current,
});

export const setCategories = (categories: ICategories): Action<ICategories> => ({
  type: SET_CATEGORIES,
  ...categories,
});

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
