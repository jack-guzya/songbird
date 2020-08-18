// Store
import store from '../store';
// Types
import { Action } from '../actions/types';
// Actions
import * as actionCreator from '../actions/actionCreator';

type ActionType = (state: any) => Action<any>

interface IDomainModel {
  actions: {
    [action: string]: ActionType
  }
  sendAction: (action: ActionType) => (args: any) => void
  getState: () => object
}

abstract class DomainModel implements IDomainModel {
  actions = {
    ...actionCreator,
  }

  getState = () => store.getState()

  sendAction = (action: ActionType) => (args: any) => store.dispatch(action(args));
}

export default DomainModel;
