// Types
import { Action } from '../types';
import { SelectedType, IElementOfList, IElementsList } from './types';

// Constants
export const SHOW_DESCRIPTION = 'SHOW_DESCRIPTION';
export const SET_ELEMENTS_LIST = 'SET_ELEMENT_LIST';

// Actions
export const showDescription = (
  selected: SelectedType,
): Action<{ selected: SelectedType }> => ({
  type: SHOW_DESCRIPTION,
  selected,
});

export const setElementsList = (list: IElementOfList): Action<{ list: IElementOfList }> => ({
  type: SET_ELEMENTS_LIST,
  list,
});

// Reducer
const DEFAULT_ELEMENTS_LIST: IElementsList = {
  list: null,
  selected: null,
};

export const elementsList = (
  state = DEFAULT_ELEMENTS_LIST,
  { type, list, selected }: Action<IElementsList>,
): IElementsList => {
  switch (type) {
    case SET_ELEMENTS_LIST:
      return { ...state, list };

    case SHOW_DESCRIPTION:
      return { ...state, selected };

    default:
      return state;
  }
};
