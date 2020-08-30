// React / Redux
import React from 'react';
import { useDispatch } from 'react-redux';
import * as modal from '../../../redux/modal';
// Components
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
// Controller
import { id, controller } from '../controller';

export interface IProps {
  initGame: () => void
}

const SuccessFinish: React.FC<IProps> = ({ initGame }) => {
  const dispatch = useDispatch();

  const repeatGame = () => {
    initGame();
  };
  const selectSection = () => {
    controller.onHidden(() => dispatch(modal.actions.setModalMode('sections')));
  };

  const title = 'Депеша от Верховного Крылатого Совета';
  const body = (
    <>
      <img
        className="modal-img"
        src="assets/success-finish.jpg"
        alt="birds"
      />
      <p className="modal-details">
        {`Доносим до Вас наши категорические поздравления!
          Ваши высокие показатели в лингвистических знаниях нас крайне удивили. Теперь вы знаете,
          кто кудахтает у вас за окном...

          Для получения вознаграждения отправьте SMS на номер 2020
          с кодовым словом "Курлык"`}
      </p>
    </>

  );
  const footer = (
    <>
      <Button
        className="btn-outline-success"
        onClick={repeatGame}
        data-dismiss={id}
      >
        Не желаю отправлять SMS...
        <br />
        Лучше давай сыграем еще раз
      </Button>
      <Button
        className="btn-outline-primary"
        onClick={selectSection}
        data-dismiss={id}
      >
        Выбрать категорию
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

export default SuccessFinish;
