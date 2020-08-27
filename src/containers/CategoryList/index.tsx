// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import { getCategoriesList, getCategoryIndex } from '../../redux/game/selectors';
// Components
import CategoryElement from '../../components/CategoryElement';
// Styles
import './style.scss';

const CategoryList: React.FC = () => {
  const list = useSelector(getCategoriesList);
  const categoryIndex = useSelector(getCategoryIndex);

  return (
    <>
      {list && list.map((name, index) => (
        <CategoryElement
          key={name}
          name={name}
          isActive={categoryIndex === index}
        />
      ))}
    </>
  );
};

export default CategoryList;
