// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import NextLevelBtn from '../../components/Buttons/NextLevel/NextLevelBtn';
import FinishBtn from '../../components/Buttons/Finish/FinishBtn';
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
        <FinishBtn
          onClick={this.handleClick}
        />
      ) : (
        <NextLevelBtn
          onClick={this.handleClick}
          disabled={status !== true}
        />
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
