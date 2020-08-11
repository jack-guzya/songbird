/* eslint-disable no-unused-vars */
import React from 'react';
// Components
import CategoryElement from './CategoryElement/CategoryElement';
// Type
import { CategoryListType } from './types';
// Styles
import './CategoryList.scss';

const CategoryList = ({ list, current }: CategoryListType | null) => (
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
