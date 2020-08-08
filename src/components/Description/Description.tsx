import * as React from 'react';

// Components
import BirdImage from '../BirdImage/BirdImage';
import BirdName from '../QuestionBlock/BirdName';
import DescriptionText from './DescriptionText';

// Style
import './Description.scss'

const Description = () => (
  <div className="bird-description-block">
    <div className="bird-description-block__image">
      <BirdImage/>
    </div>
    <BirdName/>
    <DescriptionText/>
  </div>
)

export default Description
