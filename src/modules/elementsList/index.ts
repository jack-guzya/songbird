// Types
import { Action } from '../types';
import {
  SelectedType, IElementOfList, IElementsList, ElementStatus, Status,
} from './types';

// Constants
export const SET_SELECTION = 'SET_SELECTION';
export const SET_ELEMENTS_LIST = 'SET_ELEMENT_LIST';
export const SET_ELEMENT_STATUS = 'SET_ELEMENT_STATUS';

// Actions
export const setSelection = (selected: SelectedType): Action<{ selected: SelectedType }> => ({
  type: SET_SELECTION,
  selected,
});

export const setElementsList = (
  list: Array<IElementOfList>,
): Action<{ list: Array<IElementOfList> }> => ({
  type: SET_ELEMENTS_LIST,
  list,
});

export const setElementStatus = ({ id, status }: ElementStatus): Action<ElementStatus> => ({
  type: SET_ELEMENT_STATUS,
  id,
  status,
});

// Selectors
export const getElementsList = (state: {elementsList: IElementsList}) => state.elementsList;

// Reducer
const DEFAULT_ELEMENTS_LIST: IElementsList = {
  list: null,
  selected: null,
};

const updateElementStatus = (state: IElementsList, id: number, status: Status): IElementsList => {
  const newState = state;
  newState.list[id].status = status;

  return newState;
};

export const elementsList = (
  state = DEFAULT_ELEMENTS_LIST,
  {
    type, list, selected, id, status,
  }: Action<IElementsList & ElementStatus>,
): IElementsList => {
  switch (type) {
    case SET_ELEMENTS_LIST:
      return { ...state, list };

    case SET_SELECTION:
      return { ...state, selected };

    case SET_ELEMENT_STATUS:
      return updateElementStatus(state, id, status);

    default:
      return state;
  }
};
