import { AppStateType } from '..';

export const getModalMode = (state: AppStateType) => state.modal.mode;
export const getModalData = (state: AppStateType) => state.modal;
