// Types
import * as types from './types';
import { AppStateType } from '..';

// Actions
export const setElementsList = <T>(elementsList: types.TList<T>): types.Action<T> => ({
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

export const setLevelData = <T>(data: types.IState<T>): types.Action<T> => ({
  type: types.SET_LEVEL_DATA,
  payload: {
    data,
  },
});

// Selectors
export const getElementsList = (state: AppStateType) => state.level.elementsList;

export const getElementStatus = (index: types.TIndex = 0) => (state: AppStateType) => (
  state.level.elementsList[index].status
);

export const getLevelStatus = (state: AppStateType) => state.level.levelStatus;
export const getIndexOfSelect = (state: AppStateType) => state.level.indexOfSelect;
export const getIndexOfQuestion = (state: AppStateType) => state.level.indexOfQuestion;
