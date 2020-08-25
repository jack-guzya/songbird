import { combineReducers } from 'redux';
import * as level from './reducers/level';
import * as data from './reducers/data';
import * as modal from './reducers/modal';
import * as game from './reducers/game';

export const rootReducer = combineReducers({
  data: data.reducer.data,
  game: game.reducer.game,
  level: level.reducer.level,
  modal: modal.reducer.modalMode,
});

type TAppStateType = ReturnType<typeof rootReducer>

export interface AppStateType extends TAppStateType {
  level: level.types.IState<data.types.IElement>
}

export default rootReducer;
