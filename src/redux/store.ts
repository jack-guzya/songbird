// Redux
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// Modules
import rootReducer from './index';
// Data
import rootData from '../data/index';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedStore: object) => (
  createStore(
    rootReducer,
    preloadedStore,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  )
);

const preloadedStore = {
  data: rootData.BIRDS,
};

const store = configureStore(preloadedStore);

export default store;
