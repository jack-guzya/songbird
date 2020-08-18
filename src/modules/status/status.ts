// Types
import { Status } from './type';
import { Action } from '../types';

// Constants
export const SET_STATUS = 'SET_STATUS';

// Actions
export const setStatus = (status: Status): Action<{ status: Status }> => ({
  type: SET_STATUS,
  status,
});

// Reducer
const DEFAULT_STATUS: null = null;

export const status = (
  state = DEFAULT_STATUS, { type, status }: Action<{ status: Status }>,
): Status => {
  switch (type) {
    case SET_STATUS:
      return status;

    default:
      return state;
  }
};
