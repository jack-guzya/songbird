import React from 'react';

// Components
import CategoryElement from './CategoryElement/CategoryElement';

// Styles
import './CategoryList';

type categoriesProps = {
  categoryList: Array<{
    name: string,
    isActive: boolean,
  }>
}

const CategoryList = ({ categoryList }: categoriesProps | null) => (
  <div className="category-list">
    {categoryList && categoryList.map((categoryElement) => (
      <CategoryElement
        name={categoryElement.name}
        isActive={categoryElement.isActive}
      />
    ))}
  </div>
);

export default CategoryList;
