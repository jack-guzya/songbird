// Types
import { Score } from './types';
import { Action } from '../types';

// Constants
export const UPDATE_SCORE = 'UPDATE_SCORE';

// Actions
export const updateScore = (score: Score): Action<{ score: Score }> => ({
  type: UPDATE_SCORE,
  score,
});

// Reducer
const DEFAULT_SCORE: Score = 0;

export const score = (
  state = DEFAULT_SCORE, { type, score }: Action<{ score: Score }>,
): Score => {
  switch (type) {
    case UPDATE_SCORE:
      return state + score;

    default:
      return state;
  }
};
