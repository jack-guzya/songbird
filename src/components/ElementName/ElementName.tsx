/* eslint-disable no-unused-vars */
import React from 'react';
// Types
import { ElementNameType } from './types';

const ElementName = ({ firstName = '******', secondName }: ElementNameType) => (
  <div className="question-block__element-name">
    <h2>{firstName}</h2>
    <h3>{secondName}</h3>
  </div>
);

export default ElementName;
