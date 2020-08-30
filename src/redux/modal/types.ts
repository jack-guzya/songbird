// Constants
export const SET_MODAL_MODE = 'SET_MODAL_MODE';
export const SET_MODAL_DATA = 'SET_MODAL_DATA';

export type Mode = 'failFinish' | 'successFinish' | 'sections'

export interface ISetModalMode {
  type: typeof SET_MODAL_MODE
  payload: {
    mode: Mode
  }
}

export interface IModalData {
  score: number
  maxScore: number
}

export interface ISetModalData {
  type: typeof SET_MODAL_DATA
  payload: {
    mode: Mode
    data: IModalData
  }
}

export interface IState {
  mode: Mode
  data: IModalData
}

export type Action = ISetModalMode | ISetModalData
