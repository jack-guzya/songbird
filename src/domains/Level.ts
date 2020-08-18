// Lodash
import shuffle from 'lodash.shuffle';

import DomainModel from './DomainModel';

class Level extends DomainModel {
  nextLevel = () => {
    const { categories, data } = this.getState();
    const preparedList = shuffle(data.list[categories.current + 1]);
    this.sendAction(this.actions.switchCategory)(categories.current + 1);
    this.sendAction(this.actions.showDescription)(null);
    this.sendAction(this.actions.setElementsList)(preparedList);
  }
}

export default Level;
