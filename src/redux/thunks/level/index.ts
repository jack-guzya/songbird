import random from 'lodash.random';
import { Dispatch } from 'redux';
// import * as types from '../level-backup/types';
// import * as elementsListReducer from '../level-backup';
// import * as categoriesReducer from '../categories-backup';
// import * as gameStatus from '../gameStatus-backup';
// import * as levelStatus from '../levelStatus-backup';
// import * as score from '../score-backup';
import * as modal from '../../reducers/modal';
import * as data from '../../reducers/data';
import * as gameReducer from '../../reducers/game';
import * as levelReducer from '../../reducers/level';

import * as utils from './utils';

import { Action } from '../types';

import store from '../../store';
import { AppStateType } from '../..';

// const DEFAULT_SCORE = 5;
// let levelScore = DEFAULT_SCORE;

// const checkSelection = () => {
//   const { level }: AppStateType = store.getState();
//   return level.questionIndex === level.selected;
// };

// const addPenaltyPoints = (points: number = 1) => {
//   levelScore = levelScore > 0 ? (levelScore - points) : levelScore;
// };

// const isFinish = () => {
//   const { categories } = store.getState();
//   return (categories.categoryIndex === categories.list.length - 1);
// };

// const resetScore = () => { levelScore = DEFAULT_SCORE; };

// export const handleSuccessSelection = () => (
//   dispatch: Dispatch<Action>, getState: () => AppStateType,
// ) => {
//   const { level, game } = getState();
//   if (utils.isFinish(game.categories)) {
//     dispatch(gameReducer.actions.setGameStatus('finish'));
//   }

//   dispatch(levelReducer.actions.setLevelStatus(true));
//   dispatch(gameReducer.actions.updateScore(level.levelScore));
//   dispatch(elementsListReducer.setElementStatus(level.selected, true));

//   resetScore();
// };

export const handleSuccessSelection = (indexOfSelection: levelReducer.types.TIndex) => (
  dispatch: Dispatch<Action>, getState: () => AppStateType,
) => {
  const { level, game } = getState();
  if (utils.isFinish(game.categories)) {
    dispatch(gameReducer.actions.setGameStatus('finish'));
  }
  dispatch(gameReducer.actions.updateScore(level.levelScore));
  dispatch(levelReducer.actions.setSuccessStatus(indexOfSelection));
};

export const handleSelection = (indexOfSelection: levelReducer.types.TIndex) => (
  dispatch: Dispatch<Action>, getState: () => AppStateType,
) => {
  const { level } = getState();

  dispatch(levelReducer.actions.setSelection(indexOfSelection));
  if (level.levelStatus) { return; }

  if (indexOfSelection === level.indexOfQuestion) {
    handleSuccessSelection(indexOfSelection)(dispatch, getState);
    return;
  }

  dispatch(levelReducer.actions.setFailStatus(indexOfSelection));
};

export const nextLevel = () => (
  dispatch: Dispatch<Action>, getState: () => AppStateType,
) => {
  const { game, data } = getState();
  dispatch(gameReducer.actions.switchCategory());
  dispatch(levelReducer
    .actions
    .setLevel(data.list[game.categories.categoryIndex]));
};

// export const setLevel = (level: number) => (
//   dispatch: Dispatch<Action>, getState: () => AppStateType,
// ) => {
//   const { data } = getState();
//   const preparedList = prepareList(data, level);
//   const questionId = random();

//   dispatch(elementsListReducer.setElementsList(preparedList));
//   dispatch(elementsListReducer.setQuestionIndex(questionId));
// };
