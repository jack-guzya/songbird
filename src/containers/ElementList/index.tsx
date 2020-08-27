// React / Redux
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as level from '../../redux/level';
import * as game from '../../redux/game';
// Components
import ElementOfList from '../../components/ElementOfList';
// Types
import { HandleClickType } from './types';
// Style
import './style.scss';

const ElementsList: React.FC = () => {
  const elementsList = useSelector(level.selectors.getElementsList);
  const dispatch = useDispatch();

  const handleClick: HandleClickType = (e) => {
    const id = +e.currentTarget.dataset.element;
    dispatch(level.thunks.handleSelection({ indexOfSelection: id }));
    dispatch(game.thunks.updateGameData());
  };

  const renderList = () => elementsList && elementsList.map(
    ({ firstName }, index) => (
      <li
        className="list-group-item list-group-item-action"
        key={firstName}
        data-element={index}
        // data-toggle="list"
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
    <>
      <ul className="list-group list-group-flush">
        {renderList()}
      </ul>
    </>
  );
};

export default ElementsList;
