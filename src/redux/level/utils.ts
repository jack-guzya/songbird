// Libs
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

export const setFailStatus = <T>(
  prevState: types.IState<T>, indexOfSelect: types.TIndex,
): types.IState<T> => {
  const nextState = prevState;
  nextState.elementsList[indexOfSelect].status = false;
  nextState.levelStatus = 'fail';

  return nextState;
};

export const setSuccessStatus = <T>(
  prevState: types.IState<T>, indexOfSelect: types.TIndex,
): types.IState<T> => {
  const nextState = prevState;
  nextState.elementsList[indexOfSelect].status = true;
  nextState.levelStatus = 'success';

  return nextState;
};

export const isHandled = <T>(state: types.IState<T>, idElement: number) => (
  state.levelStatus === 'success'
  || (state.elementsList && state.elementsList[idElement].status !== null)
);
