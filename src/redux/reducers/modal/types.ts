// Constants
export const SET_MODAL_MODE = 'SET_MODAL_MODE';

export type Mode = 'failFinish' | 'successFinish'

export interface ISetModalMode {
  type: typeof SET_MODAL_MODE
  payload: {
    mode: Mode
  }
}

export type Action = ISetModalMode
