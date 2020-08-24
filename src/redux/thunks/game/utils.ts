import * as dataReducer from '../../reducers/data';

export const maxScore = (data: dataReducer.types.IData): number => {
  const POINTS_OF_CATEGORY = 5;
  return data.categories.length * POINTS_OF_CATEGORY;
};

export default maxScore;
