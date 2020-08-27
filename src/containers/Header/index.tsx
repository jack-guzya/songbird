// React
import React, { ReactNode } from 'react';
// Styles
import './style.scss';

export interface IHeader {
  children: ReactNode
}

const Header: React.FC<IHeader> = ({ children }) => (
  <>
    {children}
  </>
);

export default Header;
