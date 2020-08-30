// React
import React, { useEffect } from 'react';
// Components
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
// Controller
import { controller, id } from '../controller';

export interface IProps {
  initGame: () => void
}

const RestartConfirmation: React.FC<IProps> = ({ initGame }) => {
  useEffect(() => {
    controller.show();
  }, []);

  const repeatGame = () => {
    initGame();
    controller.hide();
  };

  const title = 'Подтверждение';
  const body = (
    <>
      <p className="modal-details">
        Вы действительно хотите начать сначала?
      </p>
    </>
  );
  const footer = (
    <>
      <Button
        className="btn-outline-danger"
        onClick={repeatGame}
        data-dismiss={id}
      >
        Да, пожалуй
      </Button>
      <Button
        className="btn-outline-primary"
        data-dismiss={id}
      >
        Передумал
      </Button>
    </>

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

export default RestartConfirmation;
