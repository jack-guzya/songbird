// Types
import { Action, SET_LEVEL_STATUS, LevelStatus } from './types';

// Actions
export const setLevelStatus = (levelStatus: LevelStatus): Action => ({
  type: SET_LEVEL_STATUS,
  payload: {
    levelStatus,
  },
});

// Selectors
export const getLevelStatus = (state: {levelStatus: LevelStatus}) => state.levelStatus;

// Reducer
const DEFAULT_STATUS: LevelStatus = null;

export const levelStatus = (
  state = DEFAULT_STATUS, action: Action,
): LevelStatus => {
  switch (action.type) {
    case SET_LEVEL_STATUS:
      return action.payload.levelStatus;

    default:
      return state;
  }
};
