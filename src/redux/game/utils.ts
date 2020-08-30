import { IState, TScore } from './types';

export const switchCategory = (prevState: IState): IState => {
  const nextState = prevState;

  if (prevState.categories.categoryIndex < prevState.categories.list.length) {
    nextState.categories.categoryIndex += 1;
    return nextState;
  }

  return prevState;
};

export const startGame = (prevState:IState, maxLevelScore: TScore): IState => {
  const maxScore = maxLevelScore * prevState.categories.list.length;
  const levelScore = maxLevelScore;

  return {
    ...prevState,
    categories: {
      ...prevState.categories,
      categoryIndex: 0,
    },
    score: 0,
    levelScore,
    maxLevelScore,
    maxScore,
    status: 'game',
  };
};

export const isFinish = (state: IState): boolean => (
  state.categories.categoryIndex === state.categories.list.length - 1
);

export const updateScore = (prevState:IState): IState => ({
  ...prevState,
  score: prevState.score + prevState.levelScore,
  levelScore: prevState.maxLevelScore,
});

export default switchCategory;
