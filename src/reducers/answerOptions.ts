import shuffle from 'lodash.shuffle';
import { SWITCH_ANSWER_OPTIONS } from '../constants/actionTypes';
// eslint-disable-next-line no-unused-vars
import { birdsData, birdDataType } from '../data/birdsData';

type action = {
  type: string,
  answerList: birdDataType[],
}

const prepareData = (data: birdDataType[]): birdDataType[] => {
  const preparedData = shuffle(data);
  const FIRST_DATA = 0;
  preparedData[FIRST_DATA].isSuccess = true;

  return shuffle(preparedData);
};

const DEFAULT_ANSWER_OPTIONS: birdDataType[] = prepareData(birdsData[0]);

const answerOptions = (
  state = DEFAULT_ANSWER_OPTIONS, { type, answerList }: action,
): birdDataType[] => {
  switch (type) {
    case SWITCH_ANSWER_OPTIONS:
      return prepareData(answerList);

    default:
      return state;
  }
};

export default answerOptions;
