import {
  UPDATE_SCORE,
  SET_OPTIONS_LIST,
  SHOW_DESCRIPTION,
  SWITCH_CATEGORY,
  SET_DATA,
  SET_CATEGORY,
  SET_FAIL_STATUS,
  SET_SUCCESS_STATUS,
} from '../constants/actionTypes';

export const setData = (data: object) => ({
  type: SET_DATA,
  data,
});

export const updateScore = (points: number) => ({
  type: UPDATE_SCORE,
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

export const setFailStatus = () => ({
  type: SET_FAIL_STATUS,
});

export const setSuccessStatus = () => ({
  type: SET_SUCCESS_STATUS,
});
