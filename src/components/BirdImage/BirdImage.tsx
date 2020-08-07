import * as React from 'react';

// Styles
import './BirdImage.scss';

type BirdImageProps = {
  url?: string,
  altText?: string,
}

const BirdImage = ({ url, altText }: BirdImageProps) => (
    <img className="bird-image" src={url} alt={altText} />
  )

BirdImage.defaultProps = {
  url: 'assets/bird-default-img.png',
  altText: 'some bird'
}

export default BirdImage;
