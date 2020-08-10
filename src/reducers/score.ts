import { UPDATE_SCORE } from '../constants/actionTypes';

const DEFAULT_SCORE: number = 0;

type action = {
  type: string,
  points: number,
}

const score = (state = DEFAULT_SCORE, { type, points }: action): number => {
  switch (type) {
    case UPDATE_SCORE:
      return points;

    default:
      return state;
  }
};

export default score;
