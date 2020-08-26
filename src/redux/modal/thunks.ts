import * as actions from './actions';
import * as types from './types';
import { TThunk } from '..';

export const setFinish: TThunk = () => (dispatch, getState) => {
  const { game } = getState();
  const modalData: types.IModalData = {
    score: game.score,
    maxScore: game.maxScore,
  };

  if (game.score < modalData.maxScore) {
    dispatch(actions.setModalData({ mode: 'failFinish', data: modalData }));
  } else {
    dispatch(actions.setModalMode('successFinish'));
  }
};

export default setFinish;
