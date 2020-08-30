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

  return list && (
    <div className="row no-gutters categories">
      <div className="col">
        <div
          className="list-group list-group-horizontal-lg"
          id="list-tab"
          role="tablist"
        >
          {list.map((name, index) => (
            <CategoryElement
              key={name}
              name={name}
              isActive={categoryIndex === index}
              isCompleted={categoryIndex > index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
