import React from 'react';

type categoryElementProps = {
  name: string,
  isActive: boolean,
}

const CategoryElement = ({ name, isActive }: categoryElementProps) => {
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
