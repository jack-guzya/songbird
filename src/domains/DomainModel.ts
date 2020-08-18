// Store
import store from '../store';
// Types
import { Action } from '../modules/types';
// Actions
import { actions } from '../modules/index';

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
    ...actions,
  }

  getState = () => store.getState()

  sendAction = (action: ActionType) => (args: any) => store.dispatch(action(args));
}

export default DomainModel;
