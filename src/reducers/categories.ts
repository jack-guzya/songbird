// Constants
import { SWITCH_CATEGORY, SET_CATEGORIES } from '../actions/constants';
// Types
import { ICategoryList } from '../containers/CategoryList/types';
import { Action } from '../actions/types';

const DEFAULT_CATEGORIES: ICategoryList = {
  current: 0,
  list: null,
};

const categories = (
  state = DEFAULT_CATEGORIES, { type, current, list }: Action<ICategoryList>,
): ICategoryList => {
  switch (type) {
    case SWITCH_CATEGORY:
      return current < state.list.length ? { ...state, current } : state;

    case SET_CATEGORIES:
      return { current, list };

    default:
      return state;
  }
};

export default categories;
