/* eslint-disable react/state-in-constructor */
// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import Button from '../../components/Button/Button';
// Domains
import Game from '../../domains/Game';
import Level from '../../domains/Level';
// Types
import { IControlBlock } from './types';
import { Status } from '../../modules/status/type';
import { FINISH_STATUS } from '../../modules/status/status';
// Style
import './ControlBlock.scss';

class ControlBlock extends Component<IControlBlock> {
  level = new Level();

  game = new Game();

  handleClick = () => {
    this.level.nextLevel();
  }

  renderButton = (status: Status) => (
    status === FINISH_STATUS
      ? (
        <Button
          className="finish-btn"
          onClick={this.game.finishGame}
        >
          Finish
        </Button>
      ) : (
        <Button
          className="next-level-btn"
          onClick={this.handleClick}
          disabled={status !== true}
        >
          Next Level
        </Button>
      )
  )

  render() {
    const { status } = this.props;
    return (
      <div className="control-block">
        {this.renderButton(status)}
      </div>
    );
  }
}

export default connect(({ status }: any) => ({
  status,
}))(ControlBlock);
