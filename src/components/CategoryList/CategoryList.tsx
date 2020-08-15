import React from 'react';
// Components
import CategoryElement from './CategoryElement/CategoryElement';
// Type
import { ICategoryList } from './types';
// Styles
import './CategoryList.scss';

const CategoryList: React.FC<ICategoryList> = ({ list, current }) => (
  <div className="category-list">
    {list && list.map((name, index) => (
      <CategoryElement
        name={name}
        isActive={current === index}
      />
    ))}
  </div>
);

export default CategoryList;
