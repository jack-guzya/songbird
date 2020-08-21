/* eslint-disable indent */
// React
import React from 'react';
// Types
import { IButton } from './types';
// Styles
import './Button.scss';

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
