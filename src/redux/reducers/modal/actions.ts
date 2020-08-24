// Types
import { Action, SET_MODAL_MODE, Mode } from './types';
import { AppStateType } from '../..';

// Actions
export const setModalMode = (mode: Mode): Action => ({
  type: SET_MODAL_MODE,
  payload: {
    mode,
  },
});

// Selectors
export const getModalMode = (state: AppStateType) => state.modal;
