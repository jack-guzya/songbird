// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import * as level from '../../redux/level';
// Components
import ElementName from '../../components/ElementName';
import ElementImage from '../../components/ElementImage';
import AudioPlayer from '../../components/AudioPlayer';
// Style
import './style.scss';

const QuestionBlock: React.FC = () => {
  const elementsList = useSelector(level.selectors.getElementsList);
  const levelStatus = useSelector(level.selectors.getLevelStatus);
  const indexOfQuestion = useSelector(level.selectors.getIndexOfQuestion);

  return (
    elementsList
    && (
    <div className="row no-gutters">
      <div className="col-lg-3" id="question-image-block">
        <ElementImage
          image={elementsList[indexOfQuestion].image}
          altText={elementsList[indexOfQuestion].firstName}
          show={levelStatus === 'success'}
        />
      </div>
      <div className="col">
        <ElementName
          firstName={elementsList[indexOfQuestion].firstName}
          show={levelStatus === 'success'}
        />
        <AudioPlayer
          audio={elementsList[indexOfQuestion].audio}
          isPause={levelStatus === 'success'}
        />
      </div>
    </div>
    )
  );
};

export default QuestionBlock;
