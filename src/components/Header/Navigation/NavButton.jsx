import React from 'react';
import PropTypes from 'prop-types';

function NavButton({ name, isActive }) {
  const classes = ['navigation__button'];

  if (isActive) {
    classes.push('active');
  }

  return (
    <div className={classes.join(' ')}>
      {name}
    </div>
  );
}

NavButton.defaultProps = {
  isActive: false,
  name: 'Button',
};

NavButton.propTypes = {
  isActive: PropTypes.bool,
  name: PropTypes.string,
};

export default NavButton;
