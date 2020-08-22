// Types
import { Score } from '../../components/Score';
import { Action } from '../types';

// Constants
export const UPDATE_SCORE = 'UPDATE_SCORE';

// Actions
export const updateScore = (score: Score): Action<{ score: Score }> => ({
  type: UPDATE_SCORE,
  score,
});

// Selectors
export const getScore = (state: {score: Score}) => state.score;

// Reducer
const DEFAULT_SCORE: Score = 0;

export const score = (
  state = DEFAULT_SCORE,
  { type, score }: Action<{ score: Score }>,
): Score => {
  switch (type) {
    case UPDATE_SCORE:
      return state + score;

    default:
      return state;
  }
};
