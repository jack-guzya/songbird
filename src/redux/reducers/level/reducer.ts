// Types
import * as types from './types';

import {
  updateElementStatus, setLevel, setSuccessStatus, setFailStatus, prepareElementsList,
} from './utils';

// Reducer
const DEFAULT_LEVEL_STATE: types.IState = {
  elementsList: null,
  indexOfSelect: null,
  indexOfQuestion: null,
  levelStatus: null,
  levelScore: null,
};

export const level = <T>(state = DEFAULT_LEVEL_STATE, action: types.Action<T>): types.IState<T> => {
  const DEFAULT_LEVEL_SCORE = 5;

  switch (action.type) {
    case types.SET_ELEMENTS_LIST:
      return { ...state, elementsList: prepareElementsList(action.payload.elementsList) };

    case types.SET_INDEX_OF_SELECT:
      return { ...state, indexOfSelect: action.payload.indexOfSelect };

    case types.SET_INDEX_OF_QUESTION:
      return { ...state, indexOfQuestion: action.payload.indexOfQuestion };

    case types.SET_ELEMENT_STATUS:
      return updateElementStatus(state, action.payload.index, action.payload.status);

    case types.SET_LEVEL_STATUS:
      return { ...state, levelStatus: action.payload.levelStatus };

    case types.SET_FAIL_STATUS:
      return setFailStatus(state, action.payload.indexOfSelect);

    case types.SET_SUCCESS_STATUS:
      return setSuccessStatus(state, action.payload.indexOfSelect, DEFAULT_LEVEL_SCORE);

    case types.ADD_FAIL_POINTS:
      return { ...state, levelScore: state.levelScore + action.payload.failPoints };

    case types.RESET_LEVEL_SCORE:
      return { ...state, levelScore: DEFAULT_LEVEL_SCORE };

    case types.SET_LEVEL:
      return { ...state, ...setLevel(action.payload.elementsList, DEFAULT_LEVEL_SCORE) };

    default:
      return state;
  }
};

export default level;
