import React from 'react';
// Types
import { IElementImage } from './types';
// Styles
import './ElementImage.scss';

const DEFAULT_URL = 'assets/bird-default-img.png';

interface IElementImageProps extends IElementImage {
  altText: string
  show?: boolean
}

const ElementImage: React.FC<IElementImageProps> = ({ altText, image, show = true }) => (
  <div className="element-image">
    <img
      className="element-image__image"
      src={show ? image : DEFAULT_URL}
      alt={altText}
    />
  </div>
);

export default ElementImage;
