// Redux
import { Dispatch } from 'redux';
import * as modalReducer from '../../reducers/modal';
import * as gameReducer from '../../reducers/game';
import * as levelReducer from '../../reducers/level';
import { Action } from '../types';
import { AppStateType } from '../..';
import { maxScore } from './utils';

export const startGame = () => (
  dispatch: Dispatch<Action>, getState: () => AppStateType,
) => {
  const { data } = getState();
  const categoriesData = { categoryIndex: 0, list: data.categories };
  dispatch(gameReducer.actions.startGame(categoriesData));
  dispatch(levelReducer.actions.setLevel(data.list[0]));
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
