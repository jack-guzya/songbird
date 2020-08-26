// Libs
import classNames from 'classnames';
// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import { getElementStatus } from '../../redux/level/actions';
// Styles
import './style.scss';

export interface IElementOfList {
  name: string
  index: number
}

const ElementOfList: React.FC<IElementOfList> = ({ name, index }) => {
  const status = useSelector(getElementStatus(index));

  const classes = classNames(
    'indicator',
    { success: status === true },
    { fail: status === false },
  );

  return (
    <div className="element-of-list">
      <div className={classes} />
      <p className="title">{name}</p>
    </div>
  );
};

export default ElementOfList;
