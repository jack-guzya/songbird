// React
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import Button from '../../components/Button';
// Domains
import Game from '../../domains/Game';
import Level from '../../domains/Level';
// Modules
import { selectors } from '../../modules';
// Style
import './style.scss';

const level = new Level();
const game = new Game();

const ControlBlock: React.FC = () => {
  const levelStatus = useSelector(selectors.getLevelStatus);
  const gameStatus = useSelector(selectors.getGameStatus);

  const handleClick = () => {
    level.nextLevel();
  };

  const renderButton = () => (
    gameStatus === 'finish'
      ? (
        <Button
          className="finish-btn"
          onClick={game.finishGame}
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
