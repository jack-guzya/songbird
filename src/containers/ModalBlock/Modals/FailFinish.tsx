// React
import React from 'react';
// Components
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
// Controller
import { controller, id } from '../controller';

export interface IFailFinish {
  score: number
  maxScore: number
  initGame: () => void
}

const FailFinish: React.FC<IFailFinish> = ({ score, maxScore, initGame }) => {
  const repeatGame = () => {
    initGame();
    controller.hide();
  };

  const title = 'Депеша от Верховного Крылатого Совета';
  const body = (
    <>
      <img
        className="modal-img"
        src="assets/fail-finish.jpg"
        alt="birds"
      />
      <p className="modal-details">
        {`Доносим до Вас печальные известия!
        Мы крайне огорчены вашим результатом - ${score} из ${maxScore}.
        В целях вашего воспитания в воздух подняты эскадрильи специально обученных
         и дрессированных голубей. Но вы можете еще все исправить и попробовать сыграть еще раз.`}
      </p>
    </>
  );
  const footer = (
    <Button
      className="btn-outline-primary"
      onClick={repeatGame}
      data-dismiss={id}
    >
      Не желаю я кары небесной...
      <br />
      Хочу искупить свои вину!
    </Button>
  );

  return (
    <Modal
      id={id}
      title={title}
      body={body}
      footer={footer}
    />
  );
};

export default FailFinish;
