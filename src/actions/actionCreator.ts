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
import { ActionType, StatusType } from './types';
import { ScoreType } from '../components/Score/types';
import { ElementsListType } from '../components/ElementsList/types';
import { ElementDescriptionType } from '../components/ElementDescription/types';
import { CategoryListType, CurrentCategoryType } from '../components/CategoryList/types';
import { DataType } from '../data/types';

export const setData = (data: DataType): ActionType & DataType => ({
  type: SET_DATA,
  ...data,
});

export const updateScore = (score: ScoreType): ActionType & {score: ScoreType} => ({
  type: UPDATE_SCORE,
  score,
});

export const setElementsList = (
  list: ElementsListType,
): ActionType & { list: ElementsListType } => ({
  type: SET_ELEMENTS_LIST,
  list,
});

export const showDescription = (
  description: ElementDescriptionType,
): ActionType & ElementDescriptionType => ({
  type: SHOW_DESCRIPTION,
  ...description,
});

export const switchCategory = (
  current: CurrentCategoryType,
): ActionType & { current: CurrentCategoryType } => ({
  type: SWITCH_CATEGORY,
  current,
});

export const setCategories = (categories: CategoryListType): ActionType & CategoryListType => ({
  type: SET_CATEGORIES,
  ...categories,
});

export const setStatus = (status: StatusType): ActionType & { status: StatusType } => ({
  type: SET_STATUS,
  status,
});
