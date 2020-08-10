import React from 'react';

// Styles
import './ElementImage.scss';

type ElementImageProps = {
  url?: string,
  altText?: string,
}

const DEFAULT_URL = 'assets/bird-default-img.png';

const ElementImage = ({ altText, url = DEFAULT_URL }: ElementImageProps) => (
  <img className="element-image" src={url} alt={altText} />
);

export default ElementImage;
