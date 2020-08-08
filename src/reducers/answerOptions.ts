import { SWITCH_ANSWER_OPTIONS } from '../constants/actionTypes'
import { birdsData, birdDataType } from '../data/birdsData';

import shuffle from 'lodash.shuffle'

type action = {
  type: string,
  answerList: birdDataType[],
}

const prepareData = (data: birdDataType[]): birdDataType[] => {
  let preparedData = shuffle(data);
  const FIRST_DATA = 0;
  preparedData[FIRST_DATA].isSuccess = true;

  return shuffle(preparedData)
}

const DEFAULT_ANSWER_OPTIONS: birdDataType[] = prepareData(birdsData[0]);

const answerOptions = (state = DEFAULT_ANSWER_OPTIONS, { type, answerList }: action): birdDataType[] => {
  switch (type) {
    case SWITCH_ANSWER_OPTIONS:
      return prepareData(answerList);

    default:
      console.log(state)
      return state;
  }
}

export default answerOptions
