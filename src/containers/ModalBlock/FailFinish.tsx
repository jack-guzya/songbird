// React
import React from 'react';
// Components
import Modal from '../../components/Modal';
import Button from '../../components/Button';

export interface IFailFinish {
  score: number
  maxScore: number
  onClick: () => void
}

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
      className="btn-primary"
      onClick={onClick}
      data-dismiss="modal"
    >
      Попробовать еще раз
    </Button>
  );

  return (
    <Modal
      title={title}
      body={body}
      footer={footer}
    />
  );
};

export default FailFinish;
