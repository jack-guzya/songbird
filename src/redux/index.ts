import { combineReducers } from 'redux';
// Modules
import * as level from './reducers/level';
// import { question, setQuestion, getQuestion } from './question';
// import {
//   categories, setCategories, switchCategory, getCategories,
// } from './categories';
// import { score, updateScore, getScore } from './score';
import * as data from './reducers/data';
// import { levelStatus, setLevelStatus, getLevelStatus } from './levelStatus';
// import { gameStatus, setGameStatus, getGameStatus } from './gameStatus';
import * as modal from './reducers/modal';
import * as game from './reducers/game';

export const rootReducer = combineReducers({
  data: data.reducer.data,
  game: game.reducer.game,
  level: level.reducer.level,
  modal: modal.reducer.modalMode,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>

// export const actions = {
//   setElementsList,
//   setSelection,
//   setElementStatus,
//   setQuestionIndex,
//   // setQuestion,
//   setCategories,
//   switchCategory,
//   updateScore,
//   setData,
//   setLevelStatus,
//   setGameStatus,
//   setModalMode,
// };

// export const selectors = {
//   getCategories,
//   getLevelStatus,
//   getGameStatus,
//   getElementsList,
//   getModalMode,
//   // getQuestion,
//   getScore,
// };

export default rootReducer;
