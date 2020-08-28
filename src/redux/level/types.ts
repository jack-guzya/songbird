// Constants
export const SET_INDEX_OF_SELECT = 'SET_INDEX_OF_SELECT';
export const SET_ELEMENTS_LIST = 'SET_ELEMENT_LIST';
export const SET_ELEMENT_STATUS = 'SET_ELEMENT_STATUS';
export const SET_INDEX_OF_QUESTION = 'SET_QUESTION_INDEX';
export const SET_LEVEL_STATUS = 'SET_LEVEL_STATUS';
export const SET_FAIL_STATUS = 'SET_FAIL_STATUS';
export const SET_SUCCESS_STATUS = 'SET_SUCCESS_STATUS';
export const ADD_FAIL_POINTS = 'ADD_FAIL_POINTS';
export const RESET_LEVEL_SCORE = 'RESET_LEVEL_SCORE';
export const SET_LEVEL_DATA = 'SET_LEVEL_DATA';

export type TIndex = number | null
export type TElementStatus = boolean
export type TLevelStatus = 'fail' | 'success';
export type TList<T> = Array<T>;

export interface IElementStatus {
  status: TElementStatus
}

interface IElementsList<T> {
  type: typeof SET_ELEMENTS_LIST
  payload: {
    elementsList: TList<T>
  }
}

interface ISetElementStatus {
  type: typeof SET_ELEMENT_STATUS
  payload: IElementStatus & {
    index: TIndex
  }
}

interface IQuestionIndex {
  type: typeof SET_INDEX_OF_QUESTION
  payload: {
    indexOfQuestion: TIndex
  }
}

interface ISetIndexOfSelect {
  type: typeof SET_INDEX_OF_SELECT
  payload: {
    indexOfSelect: TIndex
  }
}

interface ISetLevelStatus {
  type: typeof SET_LEVEL_STATUS
  payload: {
    levelStatus: TLevelStatus
  }
}

interface ISetLevelData<T> {
  type: typeof SET_LEVEL_DATA
  payload: {
    data: IState<T>
  }
}

interface ISetFailStatus {
  type: typeof SET_FAIL_STATUS
  payload: {
    indexOfSelect: TIndex
  }
}

interface ISetSuccessStatus {
  type: typeof SET_SUCCESS_STATUS
  payload: {
    indexOfSelect: TIndex
  }
}

export interface IState<T = null> {
  elementsList: TList<T & IElementStatus> | null
  indexOfSelect: TIndex | null
  indexOfQuestion: TIndex | null
  levelStatus: TLevelStatus | null
  isHandled?: () => boolean
}

export type Action<T = null> = IElementsList<T>
  | IQuestionIndex
  | ISetIndexOfSelect
  | ISetElementStatus
  | ISetLevelStatus
  | ISetLevelData<T>
  | ISetFailStatus
  | ISetSuccessStatus
