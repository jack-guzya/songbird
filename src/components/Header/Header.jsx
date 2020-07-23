import React from 'react';
import Score from './Score/Score';

// Styles
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__title-block">
        <div className="title-block__logo">
          Songbird
        </div>
        <Score />
      </div>
    </div>
  );
}

export default Header;
