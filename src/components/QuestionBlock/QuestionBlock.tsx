import React from 'react';

// Components
import ElementName from '../../components/ElementName/ElementName';
import ElementImage from '../../components/ElementImage/ElementImage';

// Styles
import './QuestionBlock.scss';

const QuestionBlock = () => (
  <div className="question-block">
    <div className="question-block__image">
      <ElementImage />
    </div>
    <ElementName />
  </div>
);

export default QuestionBlock;
