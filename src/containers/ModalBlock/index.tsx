// React / Redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as level from '../../redux/level';
import * as game from '../../redux/game';
import * as modal from '../../redux/modal';
// Components
import FailFinish from './FailFinish';
import SuccessFinish from './SuccessFinish';

const ModalBlock: React.FC = () => {
  const modalData = useSelector(modal.actions.getModalData);
  const dispatch = useDispatch();

  const repeatGame = () => {
    dispatch(game.thunks.startGame());
    dispatch(level.thunks.updateLevelData());
    dispatch(modal.actions.setModalMode(null));
  };

  switch (modalData.mode) {
    case 'failFinish':
      return (
        <FailFinish
          score={modalData.data.score}
          maxScore={modalData.data.maxScore}
          onClick={repeatGame}
        />
      );

    case 'successFinish':
      return (
        <SuccessFinish
          onClick={repeatGame}
        />
      );

    default:
      return null;
  }
};

export default ModalBlock;
