import { SWITCH_ANSWER_OPTIONS } from '../constants/actionTypes'
import birdsData from '../data/birdsData';

import shuffle from 'lodash.shuffle'

type birdData = {
  isSuccess?: boolean
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}

type action = {
  type: string,
  answerList: birdData[],
}

const prepareData = (data: birdData[]): birdData[] => {
  let preparedData = shuffle(data);
  const FIRST_DATA = 0;
  preparedData[FIRST_DATA].isSuccess = true;

  return shuffle(preparedData)
}

const DEFAULT_ANSWER_OPTIONS: birdData[] = prepareData(birdsData[0]);

const answerOptions = (state = DEFAULT_ANSWER_OPTIONS, { type, answerList }: action): birdData[] => {
  switch (type) {
    case SWITCH_ANSWER_OPTIONS:
      return prepareData(answerList);

    default:
      console.log(state)
      return state;
  }
}

export default answerOptions
