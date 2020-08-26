// Types
import { IData, Action, SET_DATA } from './types';

// Actions
export const setData = (data: IData): Action => ({
  type: SET_DATA,
  payload: {
    ...data,
  },
});

export default setData;
