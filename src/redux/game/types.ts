// Constants
export const SWITCH_CATEGORY = 'SWITCH_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const SET_SCORE = 'SET_SCORE';
export const ADD_FAIL_POINTS = 'ADD_FAIL_POINTS';
export const START_GAME = 'START_GAME';

export type TCategoryIndex = number
export type TGameStatus = 'game' | 'finish' | 'nextLevel' | null
export type TScore = number;
export type TCategories = Array<string>

export interface ICategories {
  categoryIndex: TCategoryIndex
  list: TCategories
}

interface ISwitchCategory {
  type: typeof SWITCH_CATEGORY
}

interface ISetCategories {
  type: typeof SET_CATEGORIES
  payload: {
    categories: TCategories
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
}

interface IAddFailPoints {
  type: typeof ADD_FAIL_POINTS
  payload: {
    failPoints: number
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
    maxLevelScore: TScore
  }
}

export interface IState {
  categories: ICategories
  status: TGameStatus
  score: TScore
  levelScore: TScore
  maxLevelScore: TScore
  maxScore: TScore
}

export type Action = ISwitchCategory
  | ISetCategories
  | ISetGameStatus
  | ISetScore
  | IAddFailPoints
  | IUpdateScore
  | IStartGame
