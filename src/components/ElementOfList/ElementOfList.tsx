import React from 'react';
// Types
import { IElementOfList } from './types';

const ElementOfList: React.FC<IElementOfList> = ({ firstName }) => (
  <div className="element-of-list">
    <span className="indicator" />
    <p className="title">{firstName}</p>
  </div>
);

export default ElementOfList;
