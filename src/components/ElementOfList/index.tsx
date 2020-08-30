// Libs
import classNames from 'classnames';
// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import { getElementStatus } from '../../redux/level/selectors';
// Styles
import './style.scss';

export interface IElementOfList {
  name: string
  index?: number
  onClick?: (e?: React.MouseEvent<HTMLLIElement>) => void
}

const ElementOfList: React.FC<IElementOfList> = ({ name, index, onClick }) => {
  const status = useSelector(getElementStatus(index));

  const classes = classNames(
    'element-of-list',
    { success: status === true },
    { fail: status === false },
  );

  return (
    <li
      className={classes}
      data-element={index}
      onClick={onClick}
    >
      <p className="title">{name}</p>
    </li>
  );
};

export default ElementOfList;
