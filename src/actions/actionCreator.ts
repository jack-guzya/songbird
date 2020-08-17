import {
  UPDATE_SCORE,
  SET_ELEMENTS_LIST,
  SHOW_DESCRIPTION,
  SWITCH_CATEGORY,
  SET_DATA,
  SET_CATEGORIES,
  SET_STATUS,
  SET_QUESTION,
} from './constants';
// Types
import { StatusType, CurrentDescriptionType, Action } from './types';
import { ScoreType } from '../components/Score/types';
import { ElementsListType, CurrentElementType } from '../containers/ElementList/types';
import { ICategoryList, CurrentCategoryType } from '../containers/CategoryList/types';
import { IQuestionState } from '../containers/QuestionBlock/types';
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

export const setQuestion = (question: IQuestionState): Action<IQuestionState> => ({
  type: SET_QUESTION,
  ...question,
});
