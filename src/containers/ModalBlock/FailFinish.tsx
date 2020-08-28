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
    <h1 className="modal-title">Депеша от Верховного Крылатого Совета </h1>
  );

  const body = (
    <>
      <img
        className="modal-img"
        src="assets/fail-finish.jpg"
        alt="birds"
      />
      <p className="modal-details">
        Доносим до Вас печальные известия!
        Мы крайне огорчены вашим результатом -
        {' '}
        {score}
        {' '}
        из
        {' '}
        {maxScore}
        .
        В целях вашего воспитания в воздух подняты эскадрильи специально обученных
        и дрессированных голубей
      </p>
      <p className="modal-details">
        Но вы можете еще все исправить и попробовать сыграть еще раз
      </p>
    </>
  );

  const footer = (
    <Button
      className="btn-primary"
      onClick={onClick}
      data-dismiss="modal"
    >
      Не хочу быть обосранным
      <br />
      Дайте мне еще шанс!
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
