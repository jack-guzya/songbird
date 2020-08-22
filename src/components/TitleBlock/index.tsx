import React from 'react';

interface ITitleBlock {
  title: string
}

const TitleBlock: React.FC<ITitleBlock> = ({ title }) => (
  <div className="header__title-block">
    <div className="title-block__logo">
      {title}
    </div>
  </div>
);

export default TitleBlock;
