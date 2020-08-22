// Types
import { Action } from '../types';

export type LevelStatus = boolean;

// Constants
export const SET_LEVEL_STATUS = 'SET_LEVEL_STATUS';

// Actions
export const setLevelStatus = (status: LevelStatus): Action<{ status: LevelStatus }> => ({
  type: SET_LEVEL_STATUS,
  status,
});

// Selectors
export const getLevelStatus = (state: {levelStatus: LevelStatus}) => state.levelStatus;

// Reducer
const DEFAULT_STATUS: LevelStatus = null;

export const levelStatus = (
  state = DEFAULT_STATUS, { type, status }: Action<{ status: LevelStatus }>,
): LevelStatus => {
  switch (type) {
    case SET_LEVEL_STATUS:
      return status;

    default:
      return state;
  }
};
