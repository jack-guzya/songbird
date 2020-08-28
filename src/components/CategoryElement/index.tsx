// Libs
import classNames from 'classnames';
// React
import React from 'react';
// Styles
import './style.scss';

export interface ICategoryElement {
  name: string
  isActive: boolean
  isCompleted: boolean
}

const CategoryElement: React.FC<ICategoryElement> = ({ name, isActive, isCompleted }) => {
  const classes = classNames(
    'category-element',
    'list-group-item flex-fill',
    { 'd-none d-lg-block': !isActive },
    { completed: isCompleted },
    { uncompleted: !isCompleted && !isActive },
    { current: isActive },
  );

  return (
    <div
      className={classes}
    >
      {name}
    </div>
  );
};

export default CategoryElement;
