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
    if (elementsList[id].status !== null) { return; }
    dispatch(level.thunks.handleSelection({ indexOfSelection: id }));
    dispatch(game.thunks.updateGameData());
  };

  const renderList = () => elementsList && elementsList.map(
    ({ firstName }, index) => (
      <ElementOfList
        key={firstName}
        name={firstName}
        index={index}
        onClick={handleClick}
      />
    ),
  );

  return (
    <div className="col-lg-4 elements-list">
      <ul className="elements-list__list">
        {renderList()}
      </ul>
    </div>
  );
};

export default ElementsList;
