// import shuffle from 'lodash.shuffle';
// Constants
import { SWITCH_CATEGORY, SET_CATEGORIES } from '../actions/constants';
// Types
import { CategoryListType } from '../components/CategoryList/types';
import { ActionType } from '../actions/types';

// const switchCategory = (state: categoryStateType): categoryStateType => {
//   const newState: categoryStateType = state;

//   newState.current = (newState.current < newState.list.length - 1)
//     ? newState.current + 1 : newState.current;

//   newState.list = newState.list.map((item: categoryElementType, index): categoryElementType => {
//     const category = item;
//     category.isActive = (index === newState.current);

//     return category;
//   });

//   return newState;
// };

// ========================= reducer ================================

type Action = ActionType & CategoryListType

const DEFAULT_CATEGORIES: CategoryListType = {
  current: 0,
  list: null,
};

const categories = (
  state = DEFAULT_CATEGORIES, { type, current, list }: Action,
): CategoryListType => {
  switch (type) {
    case SWITCH_CATEGORY:
      return { ...state, current };

    case SET_CATEGORIES:
      return { current, list };

    default:
      return state;
  }
};

export default categories;
