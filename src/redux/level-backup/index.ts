// Types
// import { Action } from '../types';

import * as types from './types';

// // Constants
// export const SET_SELECTION = 'SET_SELECTION';
// export const SET_ELEMENTS_LIST = 'SET_ELEMENT_LIST';
// export const SET_ELEMENT_STATUS = 'SET_ELEMENT_STATUS';
// export const SET_QUESTION_INDEX = 'SET_QUESTION_INDEX';

// Actions
export const setSelection = (selected: types.IndexType): types.Action => ({
  type: types.SET_SELECTION_INDEX,
  payload: {
    selected,
  },
});

export const setElementsList = (list: Array<types.IElementOfList>): types.Action => ({
  type: types.SET_ELEMENTS_LIST,
  payload: {
    list,
  },
});

export const setElementStatus = (index: number, status: types.Status): types.Action => ({
  type: types.SET_ELEMENT_STATUS,
  payload: {
    status,
    index,
  },
});

export const setQuestionIndex = (questionIndex: types.IndexType): types.Action => ({
  type: types.SET_QUESTION_INDEX,
  payload: {
    questionIndex,
  },
});

// Selectors
export const getElementsList = (state: {level: types.IState}) => state.level;
// export const getQuestionIndex = (state: {questionIndex: IndexType}) => state.questionIndex;

// Reducer
const DEFAULT_ELEMENTS_LIST: types.IState = {
  list: null,
  selected: null,
  questionIndex: null,
};

const updateElementStatus = (
  state: types.IState, id: number, status: types.Status,
): types.IState => {
  const newState = state;
  newState.list[id].status = status;

  return newState;
};

export const level = (state = DEFAULT_ELEMENTS_LIST, action: types.Action): types.IState => {
  switch (action.type) {
    case types.SET_ELEMENTS_LIST:
      return { ...state, list: action.payload.list };

    case types.SET_SELECTION_INDEX:
      return { ...state, selected: action.payload.selected };

    case types.SET_ELEMENT_STATUS:
      return updateElementStatus(state, action.payload.index, action.payload.status);

    case types.SET_QUESTION_INDEX:
      return { ...state, questionIndex: action.payload.questionIndex };

    default:
      return state;
  }
};
