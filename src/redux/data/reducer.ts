// Types
import { IData, Action, SET_DATA } from './types';

// Reducers
const DEFAULT_DATA_STATE: null = null;

export const data = (state = DEFAULT_DATA_STATE, action: Action): IData => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default data;
