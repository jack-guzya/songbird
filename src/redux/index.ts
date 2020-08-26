import { combineReducers, Dispatch } from 'redux';
import * as level from './level';
import * as data from './data';
import * as modal from './modal';
import * as game from './game';

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

export type Action = data.types.Action
  | game.types.Action
  | level.types.Action<data.types.IElement>
  | modal.types.Action

export type TDispatch = Dispatch<Action>

export type TThunk<T = {}> = (args?: T) => (
  dispatch: TDispatch, getState: () => AppStateType) => void

export default rootReducer;
