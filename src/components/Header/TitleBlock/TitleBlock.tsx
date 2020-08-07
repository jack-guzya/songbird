import * as React from 'react';
import Score from './Score';

const TitleBlock = () => (
    <div className="header__title-block">
      <div className="title-block__logo">
        Songbird
      </div>
      <div className="title-block__score">
        <p className="score__title">
          Score:
          <Score/>
        </p>
      </div>
    </div>
  );

export default TitleBlock;
