// Types
import {
  Action, SET_MODAL_MODE, SET_MODAL_DATA, IState,
} from './types';

// Reducer
const DEFAULT_MODAL_MODE: IState = {
  mode: 'sections',
  data: null,
};

export const modalMode = (state = DEFAULT_MODAL_MODE, action: Action): IState => {
  switch (action.type) {
    case SET_MODAL_MODE:
      return { ...state, mode: action.payload.mode };

    case SET_MODAL_DATA:
      return {
        ...state,
        mode: action.payload.mode,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default modalMode;
