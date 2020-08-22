// React
import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// Modules
import { actions, selectors } from '../../modules';
// Components
import ElementOfList from '../../components/ElementOfList';
// Types
import { HandleClickType } from './types';
// Domains
import Level from '../../domains/Level';
// Style
import './style.scss';

const level = new Level();

const ElementsList: React.FC = () => {
  const { list } = useSelector(selectors.getElementsList);

  const dispatch = useDispatch();

  const handleClick: HandleClickType = (e) => {
    const id = +e.currentTarget.dataset.element;
    dispatch(actions.setSelection(id));
    level.handleSelection();
  };

  const renderList = () => list && list.map(
    ({ firstName, status }, index) => (
      <li
        className="list__item"
        key={firstName}
        data-element={index}
        onClick={handleClick}
      >
        <ElementOfList
          name={firstName}
          isSuccess={status}
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
