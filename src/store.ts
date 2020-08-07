import { createStore, compose } from 'redux'
import rootReducer from './reducers/index'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedStore: object) => (
  createStore(
    rootReducer,
    preloadedStore,
    composeEnhancers()
  )
)

const store = configureStore({})

export default store;


