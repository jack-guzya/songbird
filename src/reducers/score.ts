import { ADD_POINTS } from '../constants/actionTypes'

const DEFAULT_SCORE: number = 0;

type action = {
  type: string,
  score: number,
}

const score = (state = DEFAULT_SCORE, { type, score }: action): number => {
  switch (type) {
    case ADD_POINTS:
      return score;

    default:
      return state;
  }
}

export default score
