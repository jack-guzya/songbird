// React
import React from 'react';
// Styles
import './style.scss';

export interface IElementImage {
  image: string,
}

interface IElementImageProps extends IElementImage {
  altText: string
  show: boolean
}

const DEFAULT_URL = 'assets/bird-default-img.png';

const ElementImage: React.FC<IElementImageProps> = ({ altText, image, show = true }) => (
  <div className="element-image-wrapper">
    <img
      className="element-image"
      src={show ? image : DEFAULT_URL}
      alt={altText}
    />
  </div>
);

export default ElementImage;
