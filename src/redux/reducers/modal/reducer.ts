// Types
import { Action, SET_MODAL_MODE, Mode } from './types';

// Reducer
const DEFAULT_MODAL_MODE: Mode = null;

export const modalMode = (state = DEFAULT_MODAL_MODE, action: Action): Mode => {
  switch (action.type) {
    case SET_MODAL_MODE:
      return action.payload.mode;

    default:
      return state;
  }
};

export default modalMode;
