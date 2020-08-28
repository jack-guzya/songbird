// React
import React from 'react';
// Components
import Modal from '../../components/Modal';
import Button from '../../components/Button';

interface IProps {
  onClick: () => void
}

const SuccessFinish: React.FC<IProps> = ({ onClick }) => {
  const title = (
    <h1 className="modal-title">Депеша от Верховного Крылатого Совета </h1>
  );

  const body = (
    <>
      <img
        className="modal-img"
        src="assets/success-finish.jpg"
        alt="birds"
      />
      <p className="modal-details">
        Доносим до Вас наши категорические поздравления!
        Ваши высокие показатели в лингвистических знаниях нас крайне удивили. Теперь вы знаете,
        кто кудахтает у вас за окном...
      </p>
      <p className="modal-details">
        Для получения вознаграждения отправьте SMS на номер 2020
        с кодовым словом &quot;Курлык&quot;
      </p>
    </>
  );

  const footer = (
    <Button
      className="btn-primary"
      onClick={onClick}
      data-dismiss="modal"
    >
      Не хочу отправлять SMS
      <br />
      Дай еще сыграть!
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

export default SuccessFinish;
