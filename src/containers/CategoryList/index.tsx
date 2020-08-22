// React
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import CategoryElement from '../../components/CategoryElement';
// Modules
import { getCategories } from '../../modules/categories';
// Styles
import './style.scss';

const CategoryList: React.FC = () => {
  const { list, current } = useSelector(getCategories);

  return (
    <div className="category-list">
      {list && list.map((name, index) => (
        <CategoryElement
          key={name}
          name={name}
          isActive={current === index}
        />
      ))}
    </div>
  );
};

export default CategoryList;
