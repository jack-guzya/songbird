// React
import React, { Component } from 'react';
// Types
import { INextLevelButton } from './types';
// Services
import LevelManager from '../../services/LevelsManager';
// Style
import './NextLevelButton.scss';

class NextLevelButton extends Component<INextLevelButton> {
  levelManager = new LevelManager();

  handleClick = () => {
    this.levelManager.nextLevel();
  }

  render() {
    return (
      <button
        className="next-level-btn"
        type="button"
        onClick={this.handleClick}
      >
        Next level
      </button>
    );
  }
}

export default NextLevelButton;
