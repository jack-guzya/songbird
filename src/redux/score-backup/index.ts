// Types
import { Action, UPDATE_SCORE, Score } from './types';

// Actions
export const updateScore = (score: Score): Action => ({
  type: UPDATE_SCORE,
  payload: {
    score,
  },

});

// Selectors
export const getScore = (state: {score: Score}) => state.score;

// Reducer
const DEFAULT_SCORE: Score = 0;

export const score = (state = DEFAULT_SCORE, action: Action): Score => {
  switch (action.type) {
    case UPDATE_SCORE:
      return state + action.payload.score;

    default:
      return state;
  }
};
