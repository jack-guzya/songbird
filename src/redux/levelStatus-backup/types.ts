// Constants
export const SET_LEVEL_STATUS = 'SET_LEVEL_STATUS';

export type LevelStatus = boolean;

export interface ISetLevelStatus {
  type: typeof SET_LEVEL_STATUS
  payload: {
    levelStatus: LevelStatus
  }
}

export type Action = ISetLevelStatus
