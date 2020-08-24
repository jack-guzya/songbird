// Types
import * as types from './types';
import { switchCategory as switchCategoryUtil, startGame } from './utils';

// Reducer
const DEFAULT_STATE: types.IState = {
  categories: {
    categoryIndex: 0,
    list: null,
  },
  status: null,
  score: 0,
};

export const game = (
  state = DEFAULT_STATE, action: types.Action,
): types.IState => {
  switch (action.type) {
    case types.SWITCH_CATEGORY:
      return switchCategoryUtil(state);

    case types.SET_CATEGORIES:
      return { ...state, categories: action.payload.categories };

    case types.SET_GAME_STATUS:
      return { ...state, status: action.payload.status };

    case types.UPDATE_SCORE:
      return { ...state, score: state.score + action.payload.score };

    case types.SET_SCORE:
      return { ...state, score: action.payload.score };

    case types.START_GAME:
      return startGame(state, action.payload.categories);

    default:
      return state;
  }
};

export default game;
