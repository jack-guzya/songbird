// Constants
import { UPDATE_SCORE } from '../actions/constants';
// Types
import { Action } from '../actions/types';
import { ScoreType } from '../components/Score/types';

// type Action = ActionType & { score: ScoreType }

const DEFAULT_SCORE: number = 0;

const scoreReducer = (
  state = DEFAULT_SCORE, { type, score }: Action<{ score: ScoreType }>,
): ScoreType => {
  switch (type) {
    case UPDATE_SCORE:
      return score;

    default:
      return state;
  }
};

export default scoreReducer;
