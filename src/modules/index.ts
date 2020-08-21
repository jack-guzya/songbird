import { combineReducers } from 'redux';
// Modules
import {
  elementsList, setElementsList, setSelection, setElementStatus,
} from './elementsList/elementsList';
import { question, setQuestion } from './question/question';
import { categories, setCategories, switchCategory } from './categories/categories';
import { score, updateScore } from './score/score';
import { data, setData } from './data/data';
import { status, setStatus } from './status/status';
import { modalMode, setModalMode } from './modal/modal';

export const rootReducer = combineReducers({
  elementsList,
  question,
  categories,
  score,
  data,
  status,
  modalMode,
});

export const actions = {
  setElementsList,
  setSelection,
  setElementStatus,
  setQuestion,
  setCategories,
  switchCategory,
  updateScore,
  setData,
  setStatus,
  setModalMode,
};

export default rootReducer;
