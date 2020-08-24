import { Status } from '../level-backup/types';

// Constants
export const UPDATE_SCORE = 'UPDATE_SCORE';

export type Score = number;

export interface IUpdateScore {
  type: typeof UPDATE_SCORE
  payload: {
    score: Score
  }
}

export type Action = IUpdateScore
