import { combineReducers } from 'redux'

// Reducers
import score from './score';
import answerOptions from './answerOptions'

const rootReducer = combineReducers({ score, answerOptions })

export default rootReducer;
