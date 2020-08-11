/* eslint-disable no-unused-vars */
import React from 'react';
// Components
import ElementImage from '../ElementImage/ElementImage';
import ElementName from '../ElementName/ElementName';
import ElementText from '../ElementText/ElementText';
// Types
import { ElementDescriptionType } from './types';

// Style
import './ElementDescription.scss';

const ElementDescription = ({
  firstName, secondName, image, description,
}: ElementDescriptionType) => (
    <div className="element-description-block">
      <div className="element-description-block__image">
        <ElementImage image={image} altText={firstName} />
      </div>
      <ElementName firstName={firstName} secondName={secondName} />
      <ElementText text={description} />
    </div>
);

export default ElementDescription;
