/* eslint-disable no-unused-vars */
import React from 'react';
// Types
import { ElementImageType } from './types';

// Styles
import './ElementImage.scss';

// const DEFAULT_URL = 'assets/bird-default-img.png';

const ElementImage = ({ altText, image }: ElementImageType) => (
  <img className="element-image" src={image} alt={altText} />
);

export default ElementImage;
