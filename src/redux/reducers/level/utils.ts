// Libs
import random from 'lodash.random';
import shuffle from 'lodash.shuffle';
// Types
import * as types from './types';

export const updateElementStatus = <T>(
  state: types.IState<T>, id: number, status: types.TElementStatus,
): types.IState<T> => {
  const newState = state;
  newState.elementsList[id].status = status;

  return newState;
};

export const prepareElementsList = <T>(
  elementList: types.TList<T>,
):types.TList<T & types.IElementStatus> => {
  const preparedList = elementList.map((element) => ({ status: null, ...element }));

  return shuffle(preparedList);
};

export const setLevel = <T>(
  elementsList: types.TList<T>, defaultLevelScore: number,
): types.IState<T> => ({
    elementsList: prepareElementsList(elementsList),
    indexOfSelect: null,
    indexOfQuestion: random(0, elementsList.length - 1),
    levelStatus: null,
    levelScore: defaultLevelScore,
  });

export const setFailStatus = <T>(
  prevState: types.IState<T>, indexOfSelect: types.TIndex,
): types.IState<T> => {
  const nextState = prevState;
  nextState.elementsList[indexOfSelect].status = false;
  nextState.indexOfSelect = indexOfSelect;
  nextState.levelStatus = false;
  nextState.levelScore -= 1;

  return nextState;
};

export const setSuccessStatus = <T>(
  prevState: types.IState<T>, indexOfSelect: types.TIndex, defaultLevelScore: number,
): types.IState<T> => {
  const nextState = prevState;
  nextState.elementsList[indexOfSelect].status = true;
  nextState.levelStatus = true;
  nextState.levelScore = defaultLevelScore;

  return nextState;
};
