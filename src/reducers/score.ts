import { ADD_POINTS } from '../constants/actionTypes';

const DEFAULT_SCORE: number = 0;

type action = {
  type: string,
  points: number,
}

const score = (state = DEFAULT_SCORE, { type, points }: action): number => {
  switch (type) {
    case ADD_POINTS:
      return points;

    default:
      return state;
  }
};

export default score;
