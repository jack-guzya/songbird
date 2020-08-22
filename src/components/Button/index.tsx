// React
import React from 'react';
// Styles
import './style.scss';

export interface IButton {
  onClick: () => void
  className: string
  disabled?: boolean
}

const Button: React.FC<IButton> = ({
  className, disabled, onClick, children,
}) => (
  <button
    className={`btn ${className}`}
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
