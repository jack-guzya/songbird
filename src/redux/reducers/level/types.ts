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
export const SET_LEVEL = 'SET_LEVEL';

export type TIndex = number
export type TElementStatus = boolean

// export interface ElementStatus {
//   status: Status
//   id: number
// }

// export interface IElementOfList {
//   firstName?: string
//   secondName?: string,
//   description?: string,
//   image?: string,
//   audio?: string
//   status?: Status
// }

export type TList = Array<{
  [key: string]: any
}>;

export type TLevelStatus = boolean;

interface IElementsList {
  type: typeof SET_ELEMENTS_LIST
  payload: {
    elementsList: TList
  }
}

interface IElementStatus {
  type: typeof SET_ELEMENT_STATUS
  payload: {
    status: TElementStatus
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

interface IAddFailPoints {
  type: typeof ADD_FAIL_POINTS
  payload: {
    failPoints: number
  }
}

interface IResetLevelScore {
  type: typeof RESET_LEVEL_SCORE
}

interface ISetLevel {
  type: typeof SET_LEVEL
  payload: {
    elementsList: TList
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

export interface IState {
  elementsList: TList
  indexOfSelect: TIndex | null
  indexOfQuestion: TIndex | null
  levelStatus: TLevelStatus | null
  levelScore: number
}

export type Action = IElementsList
  | IQuestionIndex
  | ISetIndexOfSelect
  | IElementStatus
  | ISetLevelStatus
  | IAddFailPoints
  | IResetLevelScore
  | ISetLevel
  | ISetFailStatus
  | ISetSuccessStatus
