// Types
// import { Action } from '../types';
// import { IQuestion } from './types';

// // Constants
// export const SET_QUESTION_INDEX = 'SET_QUESTION_INDEX';

// // Actions
// export const setQuestionIndex = (question: IQuestion): Action<IQuestion> => ({
//   type: SET_QUESTION_INDEX,
//   ...question,
// });

// // Selectors
// export const getQuestionIndex = (state: {question: IQuestion}) => state.question;

// // Reducer
// const DEFAULT_STATE: null = null;

// export const question = (
//   state = DEFAULT_STATE,
//   { type, ...question }: Action<IQuestion>,
// ): IQuestion => {
//   switch (type) {
//     case SET_QUESTION_INDEX:
//       return question;

//     default:
//       return state;
//   }
// };
