import { IData } from '../../reducers/data/types';

export const maxScore = (data: IData): number => {
  const POINTS_OF_CATEGORY = 5;
  return data.categories.length * POINTS_OF_CATEGORY;
};

export default maxScore;
