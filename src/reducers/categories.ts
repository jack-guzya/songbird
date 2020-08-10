// import shuffle from 'lodash.shuffle';
import { SWITCH_CATEGORY, SET_CATEGORY } from '../constants/actionTypes';

type category = {
  firstName: string,
  isActive: boolean,
}

type categoryState = {
  current: number,
  list: category[]
}

const DEFAULT_CATEGORIES: categoryState = {
  current: 0,
  list: null,
};

const switchCategory = (state: categoryState): categoryState => {
  const newState: categoryState = state;

  newState.current = newState.current < newState.list.length - 1
    ? newState.current + 1 : newState.current;

  newState.list = newState.list.map((item: category, index): category => {
    const category = item;
    category.isActive = (index === newState.current);

    return category;
  });

  return newState;
};

// ========================= reducer ================================

const categories = (
  state = DEFAULT_CATEGORIES, { type, category }: { type: string, category: object },
) => {
  switch (type) {
    case SWITCH_CATEGORY:
      return switchCategory(state);

    case SET_CATEGORY:
      return category;

    default:
      return state;
  }
};

export default categories;
