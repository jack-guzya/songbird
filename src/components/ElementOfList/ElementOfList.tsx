// React
import React from 'react';
// Types
import { IElementOfList } from './types';
// Styles
import './ElementOfList.scss';

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

const ElementOfList: React.FC<IElementOfList> = ({ firstName, isSuccess }) => (
  <div className="element-of-list">
    <div className={getClass(isSuccess, 'indicator')} />
    <p className="title">{firstName}</p>
  </div>
);

export default ElementOfList;
