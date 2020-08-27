import React from 'react';

interface ITitleBlock {
  title: string
}

const TitleBlock: React.FC<ITitleBlock> = ({ title }) => (
  <div className="title-block__logo">
    {title}
  </div>
);

export default TitleBlock;
