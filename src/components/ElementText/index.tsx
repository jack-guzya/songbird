import React from 'react';

export interface IElementText {
  description: string
}

const ElementText: React.FC<IElementText> = ({ description }) => (
  <p className="description-block__text">{description}</p>
);

export default ElementText;
