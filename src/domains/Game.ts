import DomainModel from './DomainModel';

class Game extends DomainModel {
  startGame = () => {
    const { data } = this.getState();
    const categories = { current: 0, list: data.categories };
    this.sendAction(this.actions.setCategories)(categories);
    this.setLevel(0);
  }
}

export default Game;
