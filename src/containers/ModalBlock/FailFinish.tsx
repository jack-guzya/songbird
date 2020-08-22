// React
import React from 'react';
// Components
import Modal from '../../components/Modal';
import Button from '../../components/Button';
// types
import { IFailFinish } from './types';

const FailFinish: React.FC<IFailFinish> = ({ score, maxScore, onClick }) => {
  const title = (
    <h1>Результат</h1>
  );

  const body = (
    <p>
      Вы набрали
      <span>{score}</span>
      из
      <span>{maxScore}</span>
      возможных
    </p>
  );

  const footer = (
    <Button
      className="repeat-game-btn"
      onClick={onClick}
    >
      Попробовать еще раз
    </Button>
  );

  return (
    <Modal
      isOpen
      title={title}
      body={body}
      footer={footer}
    />
  );
};

export default FailFinish;
