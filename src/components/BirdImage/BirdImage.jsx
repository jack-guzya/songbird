import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './BirdImage.scss';

function BirdImage(props) {
  const { url, altText } = props;
  return (
    <img className="bird-image" src={url} alt={altText} />
  );
}

BirdImage.defaultProps = {
  url: 'assets/bird-default-img.png',
  altText: 'some bird',
};

BirdImage.propTypes = {
  url: PropTypes.string,
  altText: PropTypes.string,
};

export default BirdImage;
