// React
import React, { Component } from 'react';
// Types
import { INextLevelButton } from './types';
// Services
import Level from '../../domains/Level';
// Style
import './NextLevelButton.scss';

class NextLevelButton extends Component<INextLevelButton> {
  level = new Level();

  handleClick = () => {
    this.level.nextLevel();
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
