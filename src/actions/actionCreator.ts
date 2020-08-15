import {
  UPDATE_SCORE,
  SET_ELEMENTS_LIST,
  SHOW_DESCRIPTION,
  SWITCH_CATEGORY,
  SET_DATA,
  SET_CATEGORIES,
  SET_STATUS,
} from './constants';
// Types
import {
  ActionType, StatusType, CurrentDescriptionType, Action,
} from './types';
import { ScoreType } from '../components/Score/types';
import { ElementsListType, CurrentElementType } from '../components/ElementsList/types';
import { ElementDescriptionType } from '../containers/ElementDescription/types';
import { ICategoryList, CurrentCategoryType } from '../components/CategoryList/types';
import { DataType } from '../data/types';

export const setData = (data: DataType): Action<DataType> => ({
  type: SET_DATA,
  ...data,
});

export const updateScore = (score: ScoreType): Action<{ score: ScoreType }> => ({
  type: UPDATE_SCORE,
  score,
});

export const setElementsList = (list: ElementsListType): Action<{ list: ElementsListType }> => ({
  type: SET_ELEMENTS_LIST,
  list,
});

// export const showDescription = (
//   description: ElementDescriptionType,
// ): ActionType & ElementDescriptionType => ({
//   type: SHOW_DESCRIPTION,
//   ...description,
// });

export const showDescription = (
  currentDescription: CurrentElementType,
): Action<{ currentDescription: CurrentDescriptionType }> => ({
  type: SHOW_DESCRIPTION,
  currentDescription,
});

export const switchCategory = (
  current: CurrentCategoryType,
): Action<{ current: CurrentCategoryType }> => ({
  type: SWITCH_CATEGORY,
  current,
});

export const setCategories = (categories: ICategoryList): Action<ICategoryList> => ({
  type: SET_CATEGORIES,
  ...categories,
});

export const setStatus = (status: StatusType): Action<{ status: StatusType }> => ({
  type: SET_STATUS,
  status,
});
