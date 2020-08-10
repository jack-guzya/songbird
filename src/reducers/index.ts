import { combineReducers } from 'redux';

// Reducers
import score from './score';
import status from './status';
import optionsList from './optionsList';
import description from './description';
import categories from './categories';
import data from './data';

const rootReducer = combineReducers({
  score,
  optionsList,
  description,
  categories,
  data,
  status,
});

export default rootReducer;
