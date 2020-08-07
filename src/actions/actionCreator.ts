import { number } from "prop-types";

import { ADD_POINTS } from '../constants/actionTypes'

export const addPointsToScore = (points: number) => ({
  type: ADD_POINTS,
  score: points
})
