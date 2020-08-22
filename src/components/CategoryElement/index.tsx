import React from 'react';

export interface ICategoryElement {
  name: string
  isActive: boolean
}

const CategoryElement: React.FC<ICategoryElement> = ({ name, isActive }) => {
  const elementClass = 'categories__element';

  return (
    <div className={isActive ? `${elementClass} active` : elementClass}>
      {name}
    </div>
  );
};

export default CategoryElement;
