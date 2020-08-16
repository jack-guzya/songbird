import React from 'react';
// Types
import { ICategoryElement } from './types';

const CategoryElement: React.FC<ICategoryElement> = ({ name, isActive }) => {
  const elementClass = 'categories__element';

  return (
    <div
      className={isActive ? `${elementClass} active` : elementClass}
    >
      {name}
    </div>
  );
};

export default CategoryElement;
