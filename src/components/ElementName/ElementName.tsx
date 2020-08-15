import React from 'react';
// Types
import { IElementName } from './types';

const ElementName: React.FC<IElementName> = ({ firstName = '******', secondName }) => (
  <div className="question-block__element-name">
    <h2>{firstName}</h2>
    <h3>{secondName}</h3>
  </div>
);

export default ElementName;
