import DomainModel from './DomainModel';

class Game extends DomainModel {
  get maxScore() {
    const POINTS_OF_CATEGORY = 5;
    const { data } = this.getState();
    return data.categories.length * POINTS_OF_CATEGORY;
  }

  startGame = () => {
    const { data } = this.getState();
    const categories = { current: 0, list: data.categories };
    this.sendAction(this.actions.setCategories(categories));
    this.sendAction(this.actions.setSelection(null));
    this.sendAction(this.actions.setStatus(null));
    this.sendAction(this.actions.updateScore(0));
    this.setLevel(0);
  }

  finishGame = (): void => {
    const { score } = this.getState();
    if (score < this.maxScore) {
      this.sendAction(this.actions.setModalMode('failFinish'));
      return;
    }
    this.sendAction(this.actions.setModalMode('successFinish'));
  }
}

export default Game;
