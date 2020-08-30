// React / Redux
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as level from '../../redux/level';
import * as game from '../../redux/game';
import * as modal from '../../redux/modal';
// Components
import FailFinish from './Modals/FailFinish';
import SuccessFinish from './Modals/SuccessFinish';
import Sections from './Modals/Sections';
import RestartConfirmation from './Modals/RestartConfirmation';
// Controller
import { controller } from './controller';
// Style
import './style.scss';

const ModalBlock: React.FC = () => {
  const modalData = useSelector(modal.selectors.getModalData);
  const dispatch = useDispatch();
  const hideModal = () => dispatch(modal.actions.setModalMode(null));

  useEffect(() => {
    controller.onHidden(() => hideModal());
  });

  const initGame = () => {
    dispatch(game.thunks.initGame());
    dispatch(level.thunks.updateLevelData());
  };

  switch (modalData.mode) {
    case 'failFinish':
      return (
        <FailFinish
          score={modalData.data.score}
          maxScore={modalData.data.maxScore}
          initGame={initGame}
        />
      );

    case 'successFinish':
      return (
        <SuccessFinish
          initGame={initGame}
        />
      );

    case 'sections':
      return (
        <Sections
          initGame={initGame}
        />
      );

    case 'restartConfirmation':
      return (
        <RestartConfirmation
          initGame={initGame}
        />
      );

    default:
      return null;
  }
};

export default ModalBlock;
