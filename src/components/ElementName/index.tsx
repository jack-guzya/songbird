import React from 'react';

export interface IElementName {
  firstName: string,
  secondName?: string,
}

interface IElementNameProps extends IElementName {
  show: boolean
}

const HIDE_NAME = '******';

const ElementName: React.FC<IElementNameProps> = ({ firstName, secondName, show = true }) => (
  <div className="question-block__element-name">
    <h2>{show ? firstName : HIDE_NAME}</h2>
    <h3>{secondName && (show ? secondName : HIDE_NAME)}</h3>
  </div>
);

export default ElementName;