// Types
import { IData } from './types';
import { Action } from '../types';

// Constants
export const SET_DATA = 'SET_DATA';

// Actions
export const setData = (data: IData): Action<IData> => ({
  type: SET_DATA,
  ...data,
});

// Reducers
const DEFAULT_DATA: null = null;

export const data = (
  state = DEFAULT_DATA, { type, ...data }: Action<IData>,
): IData => {
  switch (type) {
    case SET_DATA:
      return data;

    default:
      return state;
  }
};
