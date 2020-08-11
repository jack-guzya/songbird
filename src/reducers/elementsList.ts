// Helpers
import shuffle from 'lodash.shuffle';
// Constants
import { SET_ELEMENTS_LIST } from '../actions/constants';
// Types
import { ElementsListType } from '../components/ElementsList/types';
import { ActionType } from '../actions/types';

const prepareData = (list: ElementsListType): ElementsListType => {
  const preparedData = shuffle(list);
  const FIRST_DATA = 0;
  preparedData[FIRST_DATA].isSuccess = true;

  return shuffle(preparedData);
};

type Action = ActionType & {list: ElementsListType}

const DEFAULT_ELEMENTS_LIST: null = null;

const elementsList = (
  state = DEFAULT_ELEMENTS_LIST, { type, list }: Action,
): ElementsListType => {
  switch (type) {
    case SET_ELEMENTS_LIST:
      return list;

    default:
      return state;
  }
};

export default elementsList;
