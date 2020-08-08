import { combineReducers } from 'redux'

// Reducers
import score from './score';
import answerOptions from './answerOptions';
import birdDescription from './birdDescription';

const rootReducer = combineReducers({ score, answerOptions, birdDescription })

export default rootReducer;
