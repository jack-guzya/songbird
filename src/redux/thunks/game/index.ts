// Lodash
import shuffle from 'lodash.shuffle';
import random from 'lodash.random';
import { Dispatch } from 'redux';
// import * as types from '../level-backup/types';
// import * as elementsListReducer from '../level-backup';
// import * as categoriesReducer from '../categories-backup';
// import * as gameStatus from '../gameStatus-backup';
// import * as levelStatus from '../levelStatus-backup';
// import * as score from '../score-backup';
import * as modalReducer from '../../reducers/modal';
import * as dataReducer from '../../reducers/data';
import * as gameReducer from '../../reducers/game';
import * as levelReducer from '../../reducers/level';

import { Action } from '../types';
import { AppStateType } from '../..';

import { maxScore } from './utils';

// LEVEL
// export const setLevel = (level: number) => (
//   dispatch: Dispatch<Action>, getState: () => AppStateType,
// ) => {
//   const { data } = getState();
//   const preparedList = prepareList(data, level);
//   const questionId = random();

//   dispatch(elementsListReducer.setElementsList(preparedList));
//   dispatch(elementsListReducer.setQuestionIndex(questionId));
// };

// GAME
export const startGame = () => (
  dispatch: Dispatch<Action>, getState: () => AppStateType,
) => {
  const { data } = getState();
  const categoriesData = { categoryIndex: 0, list: data.categories };
  dispatch(gameReducer.actions.startGame(categoriesData));
  dispatch(levelReducer.actions.setLevel(data.list[0]));
  // dispatch(categoriesReducer.setCategories(categoriesData)); // GAME
  // dispatch(elementsListReducer.setSelection(null)); // SET LEVEL
  // dispatch(gameStatus.setGameStatus('game')); // GAME
  // dispatch(levelStatus.setLevelStatus(null)); // SET LEVEL
  // dispatch(score.updateScore(0)); // SET LEVEL (LEVEL SCORE)
};

export const finishGame = () => (
  dispatch: Dispatch<Action>, getState: () => AppStateType,
) => {
  const { game, data } = getState();

  if (game.score < maxScore(data)) {
    dispatch(modalReducer.actions.setModalMode('failFinish'));
    return;
  }

  dispatch(modalReducer.actions.setModalMode('successFinish'));
};

// Level
