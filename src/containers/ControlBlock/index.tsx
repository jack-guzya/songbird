// React / Redux
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as level from '../../redux/level';
import * as game from '../../redux/game';
import * as modal from '../../redux/modal';
// Components
import Button from '../../components/Button';
// Utils
import SoundsPlayer from '../../utils/SoundPlayer';
// Style
import './style.scss';

const soundsPlayer = new SoundsPlayer();

const ControlBlock: React.FC = () => {
  const levelStatus = useSelector(level.selectors.getLevelStatus);
  const gameStatus = useSelector(game.selectors.getGameStatus);
  const dispatch = useDispatch();

  const isFinish = gameStatus === 'finish';

  useEffect(() => {
    if (isFinish) {
      dispatch(modal.thunks.setFinish());
    }
  });

  const handleClick = () => {
    if (isFinish) { return; }

    dispatch(game.actions.switchCategory());
    dispatch(game.actions.setGameStatus('game'));
    dispatch(level.thunks.updateLevelData());
  };

  return isFinish
    ? (
      <Button
        className="btn-success"
        data-toggle="modal"
        data-target="#modal"
        onClick={soundsPlayer.playNotification}
      >
        Закончить игру
      </Button>
    ) : (
      <Button
        onClick={handleClick}
        disabled={levelStatus !== 'success'}
      >
        Следующий уровень
      </Button>
    );
};

export default ControlBlock;
