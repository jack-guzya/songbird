// Types
import {
  Action, SET_MODAL_MODE, Mode, IModalData, SET_MODAL_DATA, IState,
} from './types';
import { AppStateType } from '../..';

// Actions
export const setModalMode = (mode: Mode): Action => ({
  type: SET_MODAL_MODE,
  payload: {
    mode,
  },
});

export const setModalData = (data: IState): Action => ({
  type: SET_MODAL_DATA,
  payload: {
    ...data,
  },
});

// Selectors
export const getModalMode = (state: AppStateType) => state.modal.mode;
export const getModalData = (state: AppStateType) => state.modal;
