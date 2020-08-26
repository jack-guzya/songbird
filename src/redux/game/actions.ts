// Types
import * as types from './types';
import { AppStateType } from '..';

// Actions
export const switchCategory = (): types.Action => ({
  type: types.SWITCH_CATEGORY,
});

export const setCategories = (categories: types.TCategories): types.Action => ({
  type: types.SET_CATEGORIES,
  payload: {
    categories,
  },
});

export const setGameStatus = (status: types.TGameStatus): types.Action => ({
  type: types.SET_GAME_STATUS,
  payload: {
    status,
  },
});

export const updateScore = (): types.Action => ({
  type: types.UPDATE_SCORE,
});

export const addFailPoints = (): types.Action => ({
  type: types.ADD_FAIL_POINTS,
  payload: {
    failPoints: -1,
  },
});

export const setScore = (score: types.TScore): types.Action => ({
  type: types.SET_SCORE,
  payload: {
    score,
  },
});

export const startGame = (maxLevelScore: types.TScore = 5): types.Action => ({
  type: types.START_GAME,
  payload: {
    maxLevelScore,
  },
});

// Selectors
export const getCategoriesList = (state: AppStateType) => state.game.categories.list;
export const getCategoryIndex = (state: AppStateType) => state.game.categories.categoryIndex;
export const getGameStatus = (state: AppStateType) => state.game.status;
export const getScore = (state: AppStateType) => state.game.score;
