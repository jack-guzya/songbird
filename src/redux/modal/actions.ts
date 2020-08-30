// Types
import * as types from './types';

export const setModalMode = (mode: types.Mode): types.Action => ({
  type: types.SET_MODAL_MODE,
  payload: {
    mode,
  },
});

export const setModalData = (data: types.IState): types.Action => ({
  type: types.SET_MODAL_DATA,
  payload: {
    ...data,
  },
});
