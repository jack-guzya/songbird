import { combineReducers } from 'redux';
// Modules
import {
  elementsList, setElementsList, setSelection, setElementStatus, getElementsList,
} from './elementsList';
import { question, setQuestion, getQuestion } from './question';
import {
  categories, setCategories, switchCategory, getCategories,
} from './categories';
import { score, updateScore, getScore } from './score';
import { data, setData } from './data';
import { levelStatus, setLevelStatus, getLevelStatus } from './levelStatus';
import { gameStatus, setGameStatus, getGameStatus } from './gameStatus';
import { modalMode, setModalMode, getModalMode } from './modal';

export const rootReducer = combineReducers({
  elementsList,
  question,
  categories,
  score,
  data,
  levelStatus,
  gameStatus,
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
  setLevelStatus,
  setGameStatus,
  setModalMode,
};

export const selectors = {
  getCategories,
  getLevelStatus,
  getGameStatus,
  getElementsList,
  getModalMode,
  getQuestion,
  getScore,
};

export default rootReducer;
