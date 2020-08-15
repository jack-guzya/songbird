/* eslint-disable no-unused-vars */
import React from 'react';
// Components
import ElementName from '../../components/ElementName/ElementName';
import ElementImage from '../../components/ElementImage/ElementImage';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
// Types
import { IElementImage } from '../ElementImage/types';
import { IElementName } from '../ElementName/types';

// Styles
import './QuestionBlock.scss';

const QuestionBlock = ({ image, firstName }: IElementName & IElementImage) => (
  <div className="question-block">
    <div className="question-block__image">
      <ElementImage image={image} altText={firstName} />
    </div>
    <AudioPlayer src={null} />
    <ElementName firstName={firstName} />
  </div>
);

export default QuestionBlock;
