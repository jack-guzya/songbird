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

  startGame = () => {
    const { data } = this.getState();
    const preparedList = shuffle(data.list[0]);
    const categories = { current: 0, list: data.categories };
    this.sendAction(this.actions.setElementsList)(preparedList);
    this.sendAction(this.actions.setCategories)(categories);
    this.sendAction(this.actions.setQuestion)({ current: 1, data: preparedList[1] });
  }
}

export default Level;
