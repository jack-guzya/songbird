// Types
import { Action, IndexType, ICategories } from './types';

export type Current = number

// Constants
export const SWITCH_CATEGORY = 'SWITCH_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';

// Actions
export const switchCategory = (categoryIndex: IndexType): Action => ({
  type: SWITCH_CATEGORY,
  payload: {
    categoryIndex,
  },
});

export const setCategories = (categories: ICategories): Action => ({
  type: SET_CATEGORIES,
  payload: {
    ...categories,
  },
});

// Selectors
export const getCategories = (state: {categories: ICategories}) => state.categories;

// Reducer
const DEFAULT_CATEGORIES: ICategories = {
  categoryIndex: 0,
  list: null,
};

export const categories = (
  state = DEFAULT_CATEGORIES, action: Action,
): ICategories => {
  switch (action.type) {
    case SWITCH_CATEGORY:
      return action.payload.categoryIndex < state.list.length
        ? { ...state, categoryIndex: action.payload.categoryIndex }
        : state;

    case SET_CATEGORIES:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
