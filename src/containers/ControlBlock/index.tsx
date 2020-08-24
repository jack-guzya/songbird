// React
import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getGameStatus } from '../../redux/reducers/game/actions';
import { getLevelStatus } from '../../redux/reducers/level/actions';
import { nextLevel } from '../../redux/thunks/level';
import { finishGame } from '../../redux/thunks/game';
// Components
import Button from '../../components/Button';
// // Domains
// import Game from '../../domains/Game';
// import Level from '../../domains/Level';
// Style
import './style.scss';

// const level = new Level();
// const game = new Game();

const ControlBlock: React.FC = () => {
  const levelStatus = useSelector(getLevelStatus);
  const gameStatus = useSelector(getGameStatus);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(nextLevel());
  };

  const handleFinishButton = () => {
    dispatch(finishGame());
  };

  const renderButton = () => (
    gameStatus === 'finish'
      ? (
        <Button
          className="finish-btn"
          onClick={handleFinishButton}
        >
          Finish
        </Button>
      ) : (
        <Button
          className="next-level-btn"
          onClick={handleClick}
          disabled={!levelStatus}
        >
          Next Level
        </Button>
      ));

  return (
    <div className="control-block">
      {renderButton()}
    </div>
  );
};

export default ControlBlock;
