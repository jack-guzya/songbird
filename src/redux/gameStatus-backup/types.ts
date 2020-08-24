// Constants
export const SET_GAME_STATUS = 'SET_GAME_STATUS';

export type GameStatus = 'game' | 'finish';

export interface ISetGameStatus {
  type: typeof SET_GAME_STATUS
  payload: {
    gameStatus: GameStatus
  }
}

export type Action = ISetGameStatus
