// React
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import data from '../../../data';
import * as dataRedux from '../../../redux/data';
// Components
import Modal from '../../../components/Modal';
// Controller
import { controller, id } from '../controller';

interface IProps {
  initGame: () => void
}

type TDataName = keyof typeof data;

const Sections: React.FC<IProps> = ({ initGame }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    controller.show();
  }, []);

  const initGameWithData = (sectionName: TDataName) => () => {
    dispatch(dataRedux.actions.setData(data[sectionName]));
    initGame();
  };

  const title = 'Выберите категорию';
  const body = (
    <div className="container">
      <div className="row justify-content-center">
        {
          Object.keys(data).map((name: TDataName, index) => (
            <div
              className="col col-lg-4 modal-section-item"
              key={name}
              role="button"
              onClick={initGameWithData(name)}
              tabIndex={index}
              data-dismiss={id}
            >
              <img
                className="modal-img"
                src={data[name].details.img}
                alt={data[name].details.title}
              />
              <p className="modal-details title">
                {data[name].details.title}
              </p>
              <p className="modal-details">
                {data[name].details.details}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );

  return (
    <Modal
      id={id}
      title={title}
      body={body}
      mode="extra"
    />
  );
};

export default Sections;
