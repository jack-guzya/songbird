import * as React from 'react';

type BirdNameProps = {
  name?: string,
  species?: string,
}

const BirdName = ({ name = '******', species = '' }: BirdNameProps) => (
  <div className="question-block__bird-name">
    <h2>{name}</h2>
    <h3>{species}</h3>
  </div>
);

export default BirdName;
