// Lodash
import shuffle from 'lodash.shuffle';

import * as types from '../../reducers/data/types';
import * as game from '../../reducers/game';
import * as level from '../../reducers/level';

// export const prepareElementsList = (data: types.IData, level: number):Array<types.IElement> => {
//   const preparedList = data
//     .list[level]
//     .map((element) => ({ status: null, ...element }));

//   return shuffle(preparedList);
// };

export const isFinish = (categories: game.types.ICategories): boolean => (
  categories.categoryIndex === categories.list.length - 1
);

export const isSuccess = (level: level.types.IState) => (
  level.indexOfQuestion === level.indexOfSelect
);
