// Types
import * as types from './types';
import { AppStateType } from '../..';

// Actions
export const setElementsList = (elementsList: types.TList): types.Action => ({
  type: types.SET_ELEMENTS_LIST,
  payload: {
    elementsList,
  },
});

export const setSelection = (indexOfSelect: types.TIndex): types.Action => ({
  type: types.SET_INDEX_OF_SELECT,
  payload: {
    indexOfSelect,
  },
});

export const setQuestion = (indexOfQuestion: types.TIndex): types.Action => ({
  type: types.SET_INDEX_OF_QUESTION,
  payload: {
    indexOfQuestion,
  },
});

export const setElementStatus = (index: number, status: types.TElementStatus): types.Action => ({
  type: types.SET_ELEMENT_STATUS,
  payload: {
    status,
    index,
  },
});

export const setLevelStatus = (levelStatus: types.TLevelStatus): types.Action => ({
  type: types.SET_LEVEL_STATUS,
  payload: {
    levelStatus,
  },
});

export const setFailStatus = (indexOfSelect: types.TIndex): types.Action => ({
  type: types.SET_FAIL_STATUS,
  payload: {
    indexOfSelect,
  },
});

export const setSuccessStatus = (indexOfSelect: types.TIndex): types.Action => ({
  type: types.SET_SUCCESS_STATUS,
  payload: {
    indexOfSelect,
  },
});

export const addFailPoints = (): types.Action => ({
  type: types.ADD_FAIL_POINTS,
  payload: {
    failPoints: -1,
  },
});

export const resetLevelScore = (): types.Action => ({
  type: types.RESET_LEVEL_SCORE,
});

export const setLevel = (elementsList: types.TList): types.Action => ({
  type: types.SET_LEVEL,
  payload: {
    elementsList,
  },
});

// Selectors
export const getElementsList = (state: AppStateType) => state.level.elementsList;
export const getLevelStatus = (state: AppStateType) => state.level.levelStatus;
export const getIndexOfSelect = (state: AppStateType) => state.level.indexOfSelect;
export const getIndexOfQuestion = (state: AppStateType) => state.level.indexOfQuestion;
