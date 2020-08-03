import React from 'react';
import PropTypes from 'prop-types';

function BirdName(props) {
  const { name } = props;

  return (
    <div className="question-block__bird-name">
      <h2>{name}</h2>
    </div>
  );
}

BirdName.defaultProps = {
  name: '******',
};

BirdName.propTypes = {
  name: PropTypes.string,
};

export default BirdName;
