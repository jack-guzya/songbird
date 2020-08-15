import React from 'react';
// Types
import { IElementImage } from './types';
// Styles
import './ElementImage.scss';

// const DEFAULT_URL = 'assets/bird-default-img.png';

const ElementImage: React.FC<IElementImage & {altText: string}> = ({ altText, image }) => (
  <div className="element-image">
    <img className="element-image__image" src={image} alt={altText} />
  </div>
);

export default ElementImage;
