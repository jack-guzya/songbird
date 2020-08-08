import * as React from 'react';

// Components
import BirdImage from '../BirdImage/BirdImage';
import BirdName from '../QuestionBlock/BirdName';
import DescriptionText from './DescriptionText';

// Birds data type
// eslint-disable-next-line no-unused-vars
import { birdDataType } from '../../data/birdsData';

// Style
import './Description.scss';

const Description = ({
  name,
  species,
  image,
  description,
}: birdDataType) => (
  <div className="bird-description-block">
    <div className="bird-description-block__image">
      <BirdImage url={image} />
    </div>
    <BirdName name={name} species={species} />
    <DescriptionText text={description} />
  </div>
);

export default Description;
