/* eslint-disable no-unused-vars */
import React from 'react';

// Types
import { CategoryElementType } from '../types';

const CategoryElement = ({ name, isActive }: CategoryElementType) => {
  const elementClass: string = 'categories__element';

  return (
    <div
      className={isActive ? `${elementClass} active` : elementClass}
    >
      {name}
    </div>
  );
};

export default CategoryElement;
