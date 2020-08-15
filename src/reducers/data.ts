// Constants
import { SET_DATA } from '../actions/constants';
// Types
import { DataType } from '../data/types';
import { Action } from '../actions/types';

// type Action = ActionType & DataType

const DEFAULT_DATA: null = null;

const dataReducer = (
  state = DEFAULT_DATA, { type, ...data }: Action<DataType>,
): DataType => {
  switch (type) {
    case SET_DATA:
      return data;

    default:
      return state;
  }
};

export default dataReducer;
