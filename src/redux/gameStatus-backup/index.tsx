// Types
import { Action, SET_GAME_STATUS, GameStatus } from './types';

// Actions
export const setGameStatus = (gameStatus: GameStatus): Action => ({
  type: SET_GAME_STATUS,
  payload: {
    gameStatus,
  },
});

// Selectors
export const getGameStatus = (state: {gameStatus: GameStatus}) => state.gameStatus;

// Reducer
const DEFAULT_STATUS: GameStatus = null;

export const gameStatus = (
  state = DEFAULT_STATUS, action: Action,
): GameStatus => {
  switch (action.type) {
    case SET_GAME_STATUS:
      return action.payload.gameStatus;

    default:
      return state;
  }
};
