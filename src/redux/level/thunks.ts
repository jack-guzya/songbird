import random from 'lodash.random';
import * as utils from './utils';
import * as types from './types';
import * as actions from './actions';

import { TThunk } from '..';

interface IThunkProps {
  indexOfSelection: types.TIndex
}

export const handleSelection: TThunk<IThunkProps> = ({ indexOfSelection }) => (
  dispatch, getState,
) => {
  const { level } = getState();
  dispatch(actions.setSelection(indexOfSelection));

  if (level.levelStatus === 'success') { return; }

  if (indexOfSelection === level.indexOfQuestion) {
    dispatch(actions.setSuccessStatus(indexOfSelection));
  } else {
    dispatch(actions.setFailStatus(indexOfSelection));
  }
};

export const updateLevelData: TThunk = () => (dispatch, getState) => {
  const { game, data } = getState();
  const elementsList = data.list[game.categories.categoryIndex];
  const elementCount = elementsList.length - 1;

  dispatch(actions.setLevelData({
    elementsList: utils.prepareElementsList(elementsList),
    indexOfQuestion: random(0, elementCount),
    indexOfSelect: null,
    levelStatus: null,
  }));
};
