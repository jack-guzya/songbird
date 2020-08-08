import { number } from "prop-types";

import { ADD_POINTS, SWITCH_ANSWER_OPTIONS } from '../constants/actionTypes'

export const addPointsToScore = (score: number) => ({
  type: ADD_POINTS,
  score,
})

export const switchAnswerOptions = (answerList: Array<object>) => ({
  type: SWITCH_ANSWER_OPTIONS,
  answerList,
})
