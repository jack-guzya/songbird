// React / Redux
import React from 'react';
import { useDispatch } from 'react-redux';
import * as modal from '../../../redux/modal';
// Components
import ElementOfList from '../../../components/ElementOfList';
// Styles
import './style.scss';

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const restartGame = () => dispatch(modal.actions.setModalMode('restartConfirmation'));
  const selectSection = () => dispatch(modal.actions.setModalMode('sections'));

  const list = [
    {
      title: 'Начать сначала',
      class: 'btn-outline-primary',
      onClick: restartGame,
    },
    {
      title: 'Выбрать категорию',
      class: 'btn-outline-primary',
      onClick: selectSection,
    },
  ];

  return (
    <div className="dropdown nav-menu">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Меню
      </button>
      <div
        className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left"
        aria-labelledby="dropdownMenuButton"
      >
        <ul className="menu-list">
          {list.map((item) => (
            <ElementOfList
              key={item.title}
              name={item.title}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
