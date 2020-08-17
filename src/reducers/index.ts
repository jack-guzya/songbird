import { combineReducers } from 'redux';
// Reducers
import score from './score';
import status from './status';
import elementsList from './elementsList';
import currentDescription from './description';
import categories from './categories';
import data from './data';

const rootReducer = combineReducers({
  score,
  elementsList,
  currentDescription,
  categories,
  data,
  status,
});

export default rootReducer;
