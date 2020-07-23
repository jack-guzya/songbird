import React from 'react';

// Components
import TitleBlock from './TitleBlock/TitleBlock';
import Navigation from './Navigation/Navigation';

// Styles
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <TitleBlock />
      <Navigation />
    </div>
  );
}

export default Header;
