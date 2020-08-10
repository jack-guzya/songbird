import {
  ADD_POINTS, SET_OPTIONS_LIST, SHOW_DESCRIPTION, SWITCH_CATEGORY, SET_DATA, SET_CATEGORY,
} from '../constants/actionTypes';

export const setData = (data: object) => ({
  type: SET_DATA,
  data,
});

export const addPointsToScore = (points: number) => ({
  type: ADD_POINTS,
  points,
});

export const setOptionsList = (list: Array<object>) => ({
  type: SET_OPTIONS_LIST,
  list,
});

export const showDescription = (description: object) => ({
  type: SHOW_DESCRIPTION,
  description,
});

export const switchCategory = () => ({
  type: SWITCH_CATEGORY,
});

export const setCategory = (category: object) => ({
  type: SET_CATEGORY,
  category,
});
