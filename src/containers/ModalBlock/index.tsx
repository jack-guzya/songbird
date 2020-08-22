// React
import React from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Modules
import { selectors, actions } from '../../modules';
// Domains
import Game from '../../domains/Game';
// Components
import FailFinish from './FailFinish';

const game = new Game();

const ModalBlock: React.FC = () => {
  const modalMode = useSelector(selectors.getModalMode);
  const dispatch = useDispatch();

  const { score } = game.getState();

  const repeatGame = () => {
    game.startGame();
    dispatch(actions.setModalMode(null));
  };

  switch (modalMode) {
    case 'failFinish':
      return (
        <FailFinish
          score={score}
          maxScore={game.maxScore}
          onClick={repeatGame}
        />
      );

    default:
      return null;
  }
};

export default ModalBlock;
