import * as actions from './actions';
import * as utils from './utils';
import { TThunk, TDispatch } from '..';
import { TGameStatus } from './types';

const updateState = (dispatch: TDispatch, status: TGameStatus) => {
  dispatch(actions.setGameStatus(status));
  dispatch(actions.updateScore());
};

export const updateGameData: TThunk = () => (dispatch, getState) => {
  const { level, game } = getState();
  if (game.status !== 'game') { return; }

  if (level.levelStatus === 'fail') {
    dispatch(actions.addFailPoints());
    return;
  }

  if (utils.isFinish(game)) {
    updateState(dispatch, 'finish');
    return;
  }

  if (level.levelStatus === 'success') {
    updateState(dispatch, 'nextLevel');
  }
};

export const startGame: TThunk = () => (dispatch, getState) => {
  const { data } = getState();
  dispatch(actions.setCategories(data.categories));
  dispatch(actions.startGame());
};

export default startGame;
