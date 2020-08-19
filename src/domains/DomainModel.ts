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

  protected setLevel = (level: number = 0) => {
    const { data } = this.getState();
    const preparedList = this.shuffle(
      data
        .list[level]
        .map((element) => ({ status: null, ...element })),
    );
    const questionId = this.random();

    this.sendAction(this.actions.setElementsList)(preparedList);
    this.sendAction(this.actions.setQuestion)(
      { current: questionId, data: preparedList[questionId] },
    );
  }
}

export default DomainModel;
