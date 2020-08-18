import DomainModel from './DomainModel';

class Game extends DomainModel {
  startGame = () => {
    const { data } = this.getState();
    const preparedList = this.shuffle(data.list[0]);
    const questionId = this.random();
    const categories = { current: 0, list: data.categories };

    this.sendAction(this.actions.setElementsList)(preparedList);
    this.sendAction(this.actions.setCategories)(categories);
    this.sendAction(this.actions.setQuestion)(
      { current: questionId, data: preparedList[questionId] },
    );
  }
}

export default Game;
