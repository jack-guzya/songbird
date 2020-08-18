// Lodash
import shuffle from 'lodash.shuffle';
import random from 'lodash.random';
// Store
import store from '../store';
// Types
import { Action } from '../modules/types';
// Actions
import { actions } from '../modules/index';

type ActionType = (state: any) => Action<any>
class DomainModel {
  protected actions = {
    ...actions,
  }

  protected getState = () => store.getState()

  protected sendAction = (action: ActionType) => (args: any) => store.dispatch(action(args));

  protected shuffle = (data: Array<any>) => shuffle(data)

  protected random = (upper: number = 5) => random(upper)
}

export default DomainModel;
