import React from 'react';
// Types
import { IElementName } from './types';

const HIDE_NAME = '******';

interface IElementNameProps extends IElementName {
  show?: boolean
}

const ElementName: React.FC<IElementNameProps> = ({ firstName, secondName, show = true }) => (
  <div className="question-block__element-name">
    <h2>{show ? firstName : HIDE_NAME}</h2>
    <h3>{secondName && (show ? secondName : HIDE_NAME)}</h3>
  </div>
);

export default ElementName;
