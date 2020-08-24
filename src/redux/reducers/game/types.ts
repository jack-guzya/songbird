// Constants
export const SWITCH_CATEGORY = 'SWITCH_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const SET_SCORE = 'SET_SCORE';
export const START_GAME = 'START_GAME';

export type TCategoryIndex = number
export type TGameStatus = 'game' | 'finish';
export type TScore = number;

export interface ICategories {
  categoryIndex: TCategoryIndex
  list: Array<string>
}

interface ISwitchCategory {
  type: typeof SWITCH_CATEGORY
}

interface ISetCategories {
  type: typeof SET_CATEGORIES
  payload: {
    categories: ICategories
  }
}

interface ISetGameStatus {
  type: typeof SET_GAME_STATUS
  payload: {
    status: TGameStatus
  }
}

interface IUpdateScore {
  type: typeof UPDATE_SCORE
  payload: {
    score: TScore
  }
}

interface ISetScore {
  type: typeof SET_SCORE
  payload: {
    score: TScore
  }
}

interface IStartGame {
  type: typeof START_GAME
  payload: {
    categories: ICategories
  }
}

export interface IState {
  categories: ICategories
  status: TGameStatus
  score: TScore
}

export type Action = ISwitchCategory
  | ISetCategories
  | ISetGameStatus
  | ISetScore
  | IUpdateScore
  | IStartGame
