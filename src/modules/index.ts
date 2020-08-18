import { combineReducers } from 'redux';
// Modules
import { elementsList, setElementsList, showDescription } from './elementsList/elementsList';
import { question, setQuestion } from './question/question';
import { categories, setCategories, switchCategory } from './categories/categories';
import { score, updateScore } from './score/score';
import { data, setData } from './data/data';

export const rootReducer = combineReducers({
  elementsList,
  question,
  categories,
  score,
  data,
});

export const actions = {
  setElementsList,
  showDescription,
  setQuestion,
  setCategories,
  switchCategory,
  updateScore,
  setData,
};

export default rootReducer;