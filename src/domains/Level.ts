import DomainModel from './DomainModel';

class Level extends DomainModel {
  nextLevel = () => {
    const { categories, data } = this.getState();
    const preparedList = this.shuffle(data.list[categories.current + 1]);
    const questionId = this.random();

    this.sendAction(this.actions.switchCategory)(categories.current + 1);
    this.sendAction(this.actions.showDescription)(null);
    this.sendAction(this.actions.setElementsList)(preparedList);
    this.sendAction(this.actions.setStatus)(null);
    this.sendAction(this.actions.setQuestion)(
      { current: questionId, data: preparedList[questionId] },
    );
  }
}

export default Level;
