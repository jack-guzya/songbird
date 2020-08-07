import * as React from 'react';

// Components
import BirdImage from '../BirdImage/BirdImage';
import BirdName from '../QuestionBlock/BirdName';
import DescriptionText from './DescriptionText';

// Style
import './Description.scss'

const Description = () => (
  <div className="description-block">
    <div className="description-block__image">
      <BirdImage/>
    </div>
    <BirdName/>
    <DescriptionText/>
  </div>
)

export default Description
