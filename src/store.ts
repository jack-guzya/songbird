import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import rootData from './data/index';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedStore: object) => (
  createStore(
    rootReducer,
    preloadedStore,
    composeEnhancers(),
  )
);

const store = configureStore({ data: rootData.BIRDS });

console.log(store.getState());

export default store;
