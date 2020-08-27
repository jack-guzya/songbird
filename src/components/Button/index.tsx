// Libs
import classNames from 'classnames';
// React
import React from 'react';
// Styles
import './style.scss';

export interface IButton {
  onClick?: () => void
  className?: string
  disabled?: boolean
  [key: string]: any
}

const Button: React.FC<IButton> = ({
  className, disabled, onClick, children, ...props
}) => {
  const classes = classNames('btn btn-primary', className);

  return (
    <button
      className={classes}
      type="button"
      onClick={onClick}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
