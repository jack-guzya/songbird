// React
import React from 'react';
// Styles
import './style.scss';

export interface IElementOfList {
  name: string
  isSuccess: boolean | null
}

const getClass = (status: boolean | null, defaultClass: string): string => {
  switch (status) {
    case true:
      return `${defaultClass} success`;
    case false:
      return `${defaultClass} fail`;
    default:
      return defaultClass;
  }
};

const ElementOfList: React.FC<IElementOfList> = ({ name, isSuccess }) => (
  <div className="element-of-list">
    <div className={getClass(isSuccess, 'indicator')} />
    <p className="title">{name}</p>
  </div>
);

export default ElementOfList;
