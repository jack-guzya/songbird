// Types
import * as types from './types';
import { switchCategory as switchCategoryUtil, startGame, updateScore } from './utils';

// Reducer
const DEFAULT_STATE: types.IState = {
  categories: {
    categoryIndex: 0,
    list: null,
  },
  status: null,
  score: 0,
  levelScore: null,
  maxLevelScore: null,
  maxScore: null,
};

export const game = (
  state = DEFAULT_STATE, action: types.Action,
): types.IState => {
  switch (action.type) {
    case types.SWITCH_CATEGORY:
      return switchCategoryUtil(state);

    case types.SET_CATEGORIES:
      return {
        ...state,
        categories: {
          categoryIndex: 0,
          list: action.payload.categories,
        },
      };

    case types.SET_GAME_STATUS:
      return { ...state, status: action.payload.status };

    case types.UPDATE_SCORE:
      return updateScore(state);

    case types.ADD_FAIL_POINTS:
      return { ...state, levelScore: state.levelScore + action.payload.failPoints };

    case types.SET_SCORE:
      return { ...state, score: action.payload.score };

    case types.START_GAME:
      return startGame(state, action.payload.maxLevelScore);

    default:
      return state;
  }
};

export default game;
