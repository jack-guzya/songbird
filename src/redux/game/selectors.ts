import { AppStateType } from '..';

export const getCategoriesList = (state: AppStateType) => state.game.categories.list;
export const getCategoryIndex = (state: AppStateType) => state.game.categories.categoryIndex;
export const getGameStatus = (state: AppStateType) => state.game.status;
export const getScore = (state: AppStateType) => state.game.score;
