import { ADD_POINTS, SWITCH_ANSWER_OPTIONS, SHOW_BIRD_DESCRIPTION } from '../constants/actionTypes';

export const addPointsToScore = (score: number) => ({
  type: ADD_POINTS,
  score,
});

export const switchAnswerOptions = (answerList: Array<object>) => ({
  type: SWITCH_ANSWER_OPTIONS,
  answerList,
});

export const showBirdDescription = (description: object) => ({
  type: SHOW_BIRD_DESCRIPTION,
  description,
});
