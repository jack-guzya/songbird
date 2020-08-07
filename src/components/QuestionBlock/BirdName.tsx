import * as React from 'react';

type BirdNameProps = {
  name?: string,
}

const BirdName = ({ name = '******' }: BirdNameProps) => (
  <div className="question-block__bird-name">
    <h2>{name}</h2>
  </div>
);


export default BirdName;
