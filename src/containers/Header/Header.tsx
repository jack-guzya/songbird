// React
import React from 'react';
// Types
import { IHeader } from './types';
// Styles
import './HEader.scss';

const Header: React.FC<IHeader> = ({ children }) => (
  <div className="header">
    {children()}
  </div>
);

export default Header;
