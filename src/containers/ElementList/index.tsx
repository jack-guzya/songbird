// React / Redux
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getElementsList } from '../../redux/reducers/level/actions';
import { handleSelection } from '../../redux/thunks/level';
// Components
import ElementOfList from '../../components/ElementOfList';
// Types
import { HandleClickType } from './types';
// Style
import './style.scss';

const ElementsList: React.FC = () => {
  const elementsList = useSelector(getElementsList);
  const dispatch = useDispatch();

  const handleClick: HandleClickType = (e) => {
    const id = +e.currentTarget.dataset.element;
    dispatch(handleSelection(id));
  };

  const renderList = () => elementsList && elementsList.map(
    ({ firstName }, index) => (
      <li
        className="list__item"
        key={firstName}
        data-element={index}
        onClick={handleClick}
      >
        <ElementOfList
          name={firstName}
          index={index}
        />
      </li>
    ),
  );

  return (
    <div className="element-list">
      <ul className="element-list__list">
        {renderList()}
      </ul>
    </div>
  );
};

export default ElementsList;
