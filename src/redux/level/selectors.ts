// Types
import { AppStateType } from '..';
import * as types from './types';

export const getElementsList = (state: AppStateType) => state.level.elementsList;

export const getElementStatus = (index: types.TIndex = 0) => (state: AppStateType) => (
  state.level.elementsList[index].status
);

export const getLevelStatus = (state: AppStateType) => state.level.levelStatus;
export const getIndexOfSelect = (state: AppStateType) => state.level.indexOfSelect;
export const getIndexOfQuestion = (state: AppStateType) => state.level.indexOfQuestion;
