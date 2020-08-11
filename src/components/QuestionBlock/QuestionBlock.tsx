/* eslint-disable no-unused-vars */
import React from 'react';
// Components
import ElementName from '../../components/ElementName/ElementName';
import ElementImage from '../../components/ElementImage/ElementImage';
// Types
import { ElementImageType } from '../ElementImage/types';
import { ElementNameType } from '../ElementName/types';

// Styles
import './QuestionBlock.scss';

const QuestionBlock = ({ image, firstName }: ElementNameType & ElementImageType) => (
  <div className="question-block">
    <div className="question-block__image">
      <ElementImage image={image} />
    </div>
    <ElementName firstName={firstName} />
  </div>
);

export default QuestionBlock;
