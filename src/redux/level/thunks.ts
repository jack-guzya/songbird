import random from 'lodash.random';
import * as utils from './utils';
import * as types from './types';
import * as actions from './actions';
// Utils
import SoundsPlayer from '../../utils/SoundPlayer';
// Types
import { TThunk, TDispatch } from '..';

interface IThunkProps {
  indexOfSelection: types.TIndex
}

const soundsPlayer = new SoundsPlayer();

const handleSuccess = (dispatch: TDispatch, id: number) => {
  dispatch(actions.setSuccessStatus(id));
  soundsPlayer.playSuccess();
};

const handleFail = (dispatch: TDispatch, id: number) => {
  dispatch(actions.setFailStatus(id));
  soundsPlayer.playFail();
};

export const handleSelection: TThunk<IThunkProps> = ({ indexOfSelection }) => (
  (dispatch, getState) => {
    const { level } = getState();

    if (utils.isHandled(level, indexOfSelection)) {
      return;
    }

    if (indexOfSelection === level.indexOfQuestion) {
      handleSuccess(dispatch, indexOfSelection);
    } else {
      handleFail(dispatch, indexOfSelection);
    }
  }
);

export const updateLevelData: TThunk = () => (dispatch, getState) => {
  const { game, data } = getState();
  const elementsList = data.list[game.categories.categoryIndex];
  const elementCount = elementsList.length - 1;
  const indexOfQuestion = random(0, elementCount);
  const preparedElementsList = utils.prepareElementsList(elementsList);
  console.log('FOR CROSSCHECK: ', preparedElementsList[indexOfQuestion].firstName); // It's successful answer. For Cross-check

  dispatch(actions.setLevelData({
    elementsList: preparedElementsList,
    indexOfQuestion,
    indexOfSelect: null,
    levelStatus: null,
  }));
};
