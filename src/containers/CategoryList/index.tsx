// React
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
import { getCategoriesList, getCategoryIndex } from '../../redux/reducers/game/actions';
// Components
import CategoryElement from '../../components/CategoryElement';
// Styles
import './style.scss';

const CategoryList: React.FC = () => {
  const list = useSelector(getCategoriesList);
  const categoryIndex = useSelector(getCategoryIndex);
  console.log(categoryIndex);

  return (
    <div className="category-list">
      {list && list.map((name, index) => (
        <CategoryElement
          key={name}
          name={name}
          isActive={categoryIndex === index}
        />
      ))}
    </div>
  );
};

export default CategoryList;
