import DomainModel from './DomainModel';

const DEFAULT_SCORE = 5;

class List extends DomainModel {
  private score = DEFAULT_SCORE;

  private check = () => {
    const { question, elementsList } = this.getState();
    return question.current === elementsList.selected;
  }

  private resetScore = () => { this.score = DEFAULT_SCORE; }

  private addPenaltyPoints = (points: number = 1) => {
    this.score = this.score > 0 ? (this.score - points) : this.score;
  };

  handleSelection = () => {
    const { status } = this.getState();
    if (status) { return; }

    if (this.check()) {
      this.sendAction(this.actions.setStatus)(true);
      this.sendAction(this.actions.updateScore)(this.score);
      this.resetScore();
      return;
    }

    this.sendAction(this.actions.setStatus)(false);
    this.addPenaltyPoints();
  }
}

export default List;
