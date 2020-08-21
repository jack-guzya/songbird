// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import Button from '../../components/Button/Button';
// Types
import { IControlBlock } from './types';
import { Status } from '../../modules/status/type';
import { FINISH_STATUS } from '../../modules/status/status';
// Services
import Level from '../../domains/Level';
// Style
import './ControlBlock.scss';

class ControlBlock extends Component<IControlBlock> {
  level = new Level();

  handleClick = () => {
    this.level.nextLevel();
  }

  renderButton = (status: Status) => (
    status === FINISH_STATUS
      ? (
        <Button
          className="finish-btn"
          onClick={this.handleClick}
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
