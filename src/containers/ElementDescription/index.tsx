// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import { getElementsList, getIndexOfSelect } from '../../redux/level/selectors';
// Components
import ElementName from '../../components/ElementName';
import ElementImage from '../../components/ElementImage';
import ElementText from '../../components/ElementText';
import AudioPlayer from '../../components/AudioPlayer';
// Style
import './style.scss';

const defaultText = (
  <div className="col element-description">
    <h3>Послушайте аудиозапись</h3>
    <p>Выберите один из вариантов ответа</p>
  </div>
);

const ElementDescription: React.FC = () => {
  const elementsList = useSelector(getElementsList);
  const indexOfSelection = useSelector(getIndexOfSelect);

  return (
    indexOfSelection === null
      ? defaultText
      : (
        <div className="col element-description">
          <div className="container">
            <div className="row">
              <div className="col-md-4 align-self-center">
                <ElementImage
                  image={elementsList[indexOfSelection].image}
                  altText={elementsList[indexOfSelection].firstName}
                  show
                />
              </div>
              <div className="col">
                <ElementName
                  firstName={elementsList[indexOfSelection].firstName}
                  secondName={elementsList[indexOfSelection].secondName}
                  show
                />
                <AudioPlayer audio={elementsList[indexOfSelection].audio} />
              </div>
            </div>
            <div className="row element-text-block">
              <ElementText description={elementsList[indexOfSelection].description} />
            </div>
          </div>
        </div>
      )
  );
};

export default ElementDescription;
