import { IState, ICategories } from './types';

export const switchCategory = (prevState: IState): IState => {
  const nextState = prevState;

  if (prevState.categories.categoryIndex < prevState.categories.list.length) {
    nextState.categories.categoryIndex += 1;
    return nextState;
  }

  return prevState;
};

export const startGame = (prevState:IState, categories: ICategories): IState => ({
  ...prevState,
  categories,
  score: 0,
  status: 'game',
});

export default switchCategory;
