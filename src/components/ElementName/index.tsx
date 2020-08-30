import React from 'react';
// Styles
import './style.scss';

export interface IElementName {
  firstName: string,
  secondName?: string,
}

interface IElementNameProps extends IElementName {
  show: boolean
}

const HIDE_NAME = '******';

const ElementName: React.FC<IElementNameProps> = ({ firstName, secondName, show = true }) => (
  <>
    <h2 className="first-name">{show ? firstName : HIDE_NAME}</h2>
    {secondName && (<h3 className="second-name">{show ? secondName : HIDE_NAME}</h3>)}
  </>
);

export default ElementName;
