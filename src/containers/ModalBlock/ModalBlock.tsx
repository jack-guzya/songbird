// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { setModalMode } from '../../modules/modal/modal';
// Domains
import Game from '../../domains/Game';
// Components
import FailFinish from './FailFinish';
// Types
import { IModalBlock } from './types';

const ModalBlock: React.FC<IModalBlock> = ({ modalMode, setModalMode }) => {
  const game = new Game();
  const { score } = game.getState();

  const repeatGame = () => {
    game.startGame();
    setModalMode(null);
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

export default connect(({ modalMode }: any) => ({
  modalMode,
}), { setModalMode })(ModalBlock);
