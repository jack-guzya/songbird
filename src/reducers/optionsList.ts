import shuffle from 'lodash.shuffle';
import { SET_OPTIONS_LIST } from '../constants/actionTypes';

// Types
// eslint-disable-next-line no-unused-vars
import { elementDescriptionProps } from '../components/ElementDescription/ElementDescription';

type action = {
  type: string,
  list: Array<elementDescriptionProps>,
}

const prepareData = (data: Array<elementDescriptionProps>): Array<elementDescriptionProps> => {
  const preparedData = shuffle(data);
  const FIRST_DATA = 0;
  preparedData[FIRST_DATA].isSuccess = true;

  return shuffle(preparedData);
};

const DEFAULT_OPTIONS_LIST: null = null;

const optionsList = (
  state = DEFAULT_OPTIONS_LIST, { type, list }: action,
): Array<elementDescriptionProps> => {
  switch (type) {
    case SET_OPTIONS_LIST:
      return prepareData(list);

    default:
      return state;
  }
};

export default optionsList;
