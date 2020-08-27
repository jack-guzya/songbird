// Libs
import classNames from 'classnames';
// React
import React from 'react';

export interface ICategoryElement {
  name: string
  isActive: boolean
}

const CategoryElement: React.FC<ICategoryElement> = ({ name, isActive }) => {
  const classes = classNames(
    'list-group-item flex-fill',
    { active: isActive },
  );

  return (
    <div className={classes}>
      {name}
    </div>
  );
};

export default CategoryElement;
