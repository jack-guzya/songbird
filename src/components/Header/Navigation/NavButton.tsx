import * as React from 'react';

type NavProps = {
  name: string,
  isActive: boolean,
}

const NavButton = ({ name, isActive}: NavProps) => {
  const classes = ['navigation__element'];

  if (isActive) {
    classes.push('active');
  }

  return (
    <div
      className={classes.join(' ')}>
      {name}
    </div>
  );
}

NavButton.defaultProps = {
  name: 'element',
  isActive: false
}

export default NavButton;
