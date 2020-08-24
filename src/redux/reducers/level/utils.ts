import random from 'lodash.random';
import shuffle from 'lodash.shuffle';

import * as types from './types';

type TPreparedList = types.TList & { status: types.TElementStatus}

export const updateElementStatus = (
  state: types.IState, id: number, status: types.TElementStatus,
): types.IState => {
  const newState = state;
  newState.elementsList[id].status = status;

  return newState;
};

export const prepareElementsList = (
  elementList: types.TList,
):types.TList => {
  const preparedList = elementList.map((element) => ({ status: null, ...element }));

  return shuffle(preparedList);
};

export const setLevel = (elementsList: types.TList, defaultLevelScore: number): types.IState => ({
  elementsList: prepareElementsList(elementsList),
  indexOfSelect: null,
  indexOfQuestion: random(0, elementsList.length - 1),
  levelStatus: null,
  levelScore: defaultLevelScore,
});

export const setFailStatus = (
  prevState: types.IState, indexOfSelect: types.TIndex,
): types.IState => {
  const nextState = prevState;
  nextState.elementsList[indexOfSelect].status = false;
  nextState.indexOfSelect = indexOfSelect;
  nextState.levelStatus = false;
  nextState.levelScore -= 1;

  return nextState;
};

export const setSuccessStatus = (
  prevState: types.IState, indexOfSelect: types.TIndex, defaultLevelScore: number,
): types.IState => {
  const nextState = prevState;
  nextState.elementsList[indexOfSelect].status = true;
  nextState.levelStatus = true;
  nextState.levelScore = defaultLevelScore;

  return nextState;
};
