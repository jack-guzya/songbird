// Constants
import { SET_QUESTION } from '../actions/constants';
// Types
import { IQuestionState } from '../containers/QuestionBlock/types';
import { Action } from '../actions/types';

const DEFAULT_STATE: null = null;

const currentDescription = (
  state = DEFAULT_STATE,
  { type, ...question }: Action<IQuestionState>,
): IQuestionState => {
  switch (type) {
    case SET_QUESTION:
      return question;

    default:
      return state;
  }
};

export default currentDescription;
