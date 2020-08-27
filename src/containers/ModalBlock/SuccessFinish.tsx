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
    <h1>Поздравляем!</h1>
  );

  const body = (
    <p>
      Теперь вы знаете, кто кудахтает у вас за окном. Мои категориеские поздравления
    </p>
  );

  const footer = (
    <Button
      className="btn-primary"
      onClick={onClick}
      data-dismiss="modal"
    >
      Начать заново
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
