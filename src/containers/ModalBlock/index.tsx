// React
import React from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Modules
import { getModalMode, setModalMode } from '../../redux/reducers/modal/actions';
// Thunk
import { startGame } from '../../redux/thunks/game';
// Components
import FailFinish from './FailFinish';

const ModalBlock: React.FC = () => {
  const modalMode = useSelector(getModalMode);
  const dispatch = useDispatch();

  // const { score } = game.getState();

  const repeatGame = () => {
    dispatch(startGame());
    dispatch(setModalMode(null));
  };

  switch (modalMode) {
    case 'failFinish':
      return (
        <FailFinish
          score={0}
          maxScore={0}
          onClick={repeatGame}
        />
      );

    default:
      return null;
  }
};

export default ModalBlock;
