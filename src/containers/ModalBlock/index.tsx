// React / Redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalMode, getModalData } from '../../redux/reducers/modal/actions';
import { startGame } from '../../redux/thunks/game';
// Components
import FailFinish from './FailFinish';
import SuccessFinish from './SuccessFinish';

const ModalBlock: React.FC = () => {
  const modalData = useSelector(getModalData);
  const dispatch = useDispatch();

  const repeatGame = () => {
    dispatch(startGame());
    dispatch(setModalMode(null));
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
