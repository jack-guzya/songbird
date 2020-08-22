// Types
import { Action } from '../types';

export type GameStatus = 'game' | 'finish';

// Constants
export const SET_GAME_STATUS = 'SET_GAME_STATUS';

// Actions
export const setGameStatus = (status: GameStatus): Action<{ status: GameStatus }> => ({
  type: SET_GAME_STATUS,
  status,
});

// Selectors
export const getGameStatus = (state: {gameStatus: GameStatus}) => state.gameStatus;

// Reducer
const DEFAULT_STATUS: GameStatus = null;

export const gameStatus = (
  state = DEFAULT_STATUS, { type, status }: Action<{ status: GameStatus }>,
): GameStatus => {
  switch (type) {
    case SET_GAME_STATUS:
      return status;

    default:
      return state;
  }
};
