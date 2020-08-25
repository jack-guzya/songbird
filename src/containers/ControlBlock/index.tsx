// React / Redux
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGameStatus } from '../../redux/reducers/game/actions';
import { getLevelStatus } from '../../redux/reducers/level/actions';
import { nextLevel } from '../../redux/thunks/level';
import { finishGame } from '../../redux/thunks/game';
// Components
import Button from '../../components/Button';
// Style
import './style.scss';

const ControlBlock: React.FC = () => {
  const levelStatus = useSelector(getLevelStatus);
  const gameStatus = useSelector(getGameStatus);
  const dispatch = useDispatch();

  const isFinish = gameStatus === 'finish';

  const handleClick = () => {
    if (isFinish) {
      dispatch(finishGame());
      return;
    }
    dispatch(nextLevel());
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
