// Types
import { Action } from '../types';

export type Mode = 'failFinish' | 'successFinish' | null

// Constants
export const SET_MODAL_MODE = 'SET_MODAL_MODE';

// Actions
export const setModalMode = (mode: Mode): Action<{ mode: Mode }> => ({
  type: SET_MODAL_MODE,
  mode,
});

// Selectors
export const getModalMode = (state: {modalMode: Mode}) => state.modalMode;

// Reducer
const DEFAULT_MODAL_MODE: Mode = null;

export const modalMode = (
  state = DEFAULT_MODAL_MODE,
  { type, mode }: Action<{ mode: Mode }>,
): Mode => {
  switch (type) {
    case SET_MODAL_MODE:
      return mode;

    default:
      return state;
  }
};
