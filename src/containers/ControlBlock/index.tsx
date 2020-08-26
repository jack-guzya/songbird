// React / Redux
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as level from '../../redux/level';
import * as game from '../../redux/game';
import * as modal from '../../redux/modal';
// Components
import Button from '../../components/Button';
// Style
import './style.scss';

const ControlBlock: React.FC = () => {
  const levelStatus = useSelector(level.selectors.getLevelStatus);
  const gameStatus = useSelector(game.selectors.getGameStatus);
  const dispatch = useDispatch();

  const isFinish = gameStatus === 'finish';

  const handleClick = () => {
    if (isFinish) {
      dispatch(modal.thunks.setFinish());
      return;
    }
    dispatch(game.actions.switchCategory());
    dispatch(game.actions.setGameStatus('game'));
    dispatch(level.thunks.updateLevelData());
  };

  return (
    <div className="control-block">
      <Button
        className={isFinish ? 'finish-btn' : ' next-level-btn'}
        onClick={handleClick}
        disabled={!levelStatus}
      >
        {isFinish ? 'Finish' : 'Next Level'}
      </Button>
    </div>
  );
};

export default ControlBlock;
