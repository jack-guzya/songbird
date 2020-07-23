import React from 'react';
import Score from './Score';

function TitleBlock() {
  return (
    <div className="header__title-block">
      <div className="title-block__logo">
        Songbird
      </div>
      <Score />
    </div>
  );
}

export default TitleBlock;
