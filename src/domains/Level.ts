import DomainModel from './DomainModel';

const DEFAULT_SCORE = 5;
class Level extends DomainModel {
  private score = DEFAULT_SCORE;

  private checkSelection = () => {
    const { question, elementsList } = this.getState();
    return question.current === elementsList.selected;
  }

  private resetScore = () => { this.score = DEFAULT_SCORE; }

  private addPenaltyPoints = (points: number = 1) => {
    this.score = this.score > 0 ? (this.score - points) : this.score;
  };

  private get isFinish() {
    const { categories } = this.getState();
    return (categories.current === categories.list.length - 1);
  }

  private handleSuccessSelection = () => {
    const { elementsList } = this.getState();
    if (this.isFinish) {
      this.sendAction(this.actions.setGameStatus('finish'));
    }
    this.sendAction(this.actions.setLevelStatus(true));
    this.sendAction(this.actions.updateScore(this.score));
    this.sendAction(this.actions.setElementStatus({
      id: elementsList.selected, status: true,
    }));
    this.resetScore();
  }

  private handleFailSelection = () => {
    const { elementsList } = this.getState();
    this.sendAction(this.actions.setLevelStatus(false));
    this.sendAction(this.actions.setElementStatus({
      id: elementsList.selected,
      status: false,
    }));
    this.addPenaltyPoints();
  }

  handleSelection = (): void => {
    const { levelStatus } = this.getState();
    if (levelStatus) { return; }

    if (this.checkSelection()) {
      this.handleSuccessSelection();
      return;
    }

    this.handleFailSelection();
  }

  nextLevel = () => {
    const { categories } = this.getState();
    this.sendAction(this.actions.switchCategory(categories.current + 1));
    this.sendAction(this.actions.setSelection(null));
    this.sendAction(this.actions.setLevelStatus(null));
    this.setLevel(categories.current + 1);
  }
}

export default Level;
