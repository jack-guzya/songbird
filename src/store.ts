// Redux
import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
// Data
import rootData from './data/index';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedStore: object) => (
  createStore(
    rootReducer,
    preloadedStore,
    composeEnhancers(),
  )
);

const preloadedStore = {
  data: rootData.BIRDS,
};

const store = configureStore(preloadedStore);

export default store;
