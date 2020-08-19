import DomainModel from './DomainModel';
// Constants
import { FINISH_STATUS } from '../modules/status/status';

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
    this.sendAction(this.actions.setStatus)(this.isFinish ? FINISH_STATUS : true);
    this.sendAction(this.actions.updateScore)(this.score);
    this.sendAction(this.actions.setElementStatus)({
      id: elementsList.selected, status: true,
    });
    this.resetScore();
  }

  private handleFailSelection = () => {
    const { elementsList } = this.getState();
    this.sendAction(this.actions.setStatus)(false);
    this.sendAction(this.actions.setElementStatus)({
      id: elementsList.selected,
      status: false,
    });
    this.addPenaltyPoints();
  }

  handleSelection = (): void => {
    const { status } = this.getState();
    if (status) { return; }

    if (this.checkSelection()) {
      this.handleSuccessSelection();
      return; // true;
    }

    this.handleFailSelection();
    // return false;
  }

  nextLevel = () => {
    const { categories } = this.getState();
    this.sendAction(this.actions.switchCategory)(categories.current + 1);
    this.sendAction(this.actions.setSelection)(null);
    this.sendAction(this.actions.setStatus)(null);
    this.setLevel(categories.current + 1);
  }
}

export default Level;
