// Types
import { Action } from '../types';
import { IQuestion } from './types';

// Constants
export const SET_QUESTION = 'SET_QUESTION';

// Actions
export const setQuestion = (question: IQuestion): Action<IQuestion> => ({
  type: SET_QUESTION,
  ...question,
});

// Selectors
export const getQuestion = (state: {question: IQuestion}) => state.question;

// Reducer
const DEFAULT_STATE: null = null;

export const question = (
  state = DEFAULT_STATE,
  { type, ...question }: Action<IQuestion>,
): IQuestion => {
  switch (type) {
    case SET_QUESTION:
      return question;

    default:
      return state;
  }
};
