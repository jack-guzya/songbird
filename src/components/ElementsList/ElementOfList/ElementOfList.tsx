/* eslint-disable no-unused-vars */
import React from 'react';
// Types
import { ElementOfListPropsType } from '../types';

const ElementOfList = ({ firstName, id, handleClick }: ElementOfListPropsType) => (
  <li
    className="option"
    data-option={id}
    onClick={handleClick}
  >
    <span className="indicator" />
    <p className="title">{firstName}</p>
  </li>
);

export default ElementOfList;
