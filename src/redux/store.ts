// Redux
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// Modules
import rootReducer from '.';
// Data
import rootData from '../data';

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
