import * as React from 'react';

// Components
import ElementImage from '../ElementImage/ElementImage';
import ElementName from '../ElementName/ElementName';
import DescriptionText from './DescriptionText/DescriptionText';

// Style
import './ElementDescription.scss';

export type elementDescriptionProps = {
  firstName?: string,
  secondName?: string,
  description?: string,
  image?: string,
  id?: number,
  isSuccess?: boolean,
}

export const ElementDescription = ({
  firstName, secondName, image, description,
}: elementDescriptionProps) => (
    <div className="element-description-block">
      <div className="element-description-block__image">
        <ElementImage url={image} />
      </div>
      <ElementName firstName={firstName} secondName={secondName} />
      <DescriptionText text={description} />
    </div>
);

// export default ElementDescription;
