import { SWITCH_ANSWER_OPTIONS } from '../constants/actionTypes'
import birdsData from '../data/birdsData';

const DEFAULT_ANSWER_OPTIONS: object[] = birdsData[0];

type action = {
  type: string,
  answerList: object[],
}

const answerOptions = (state = DEFAULT_ANSWER_OPTIONS, { type, answerList }: action): object[] => {
  switch (type) {
    case SWITCH_ANSWER_OPTIONS:
      return answerList;

    default:
      return state;
  }
}

export default answerOptions
