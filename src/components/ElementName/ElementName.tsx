import * as React from 'react';

type ElementNameProps = {
  firstName?: string,
  secondName?: string,
}

const ElementName = ({ firstName = '******', secondName = '' }: ElementNameProps) => (
  <div className="question-block__element-name">
    <h2>{firstName}</h2>
    <h3>{secondName}</h3>
  </div>
);

export default ElementName;
