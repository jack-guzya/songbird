/* eslint-disable no-unused-vars */
import React from 'react';
// Components
import ElementOfList from './ElementOfList/ElementOfList';
// Types
import { ElementsListPropsType } from './types';
// Style
import './ElementsList.scss';

const ElementsList = ({ list, handleClick }: ElementsListPropsType) => (
  <div className="options-list">
    <ul className="options-list__list">
      {
        list && list.map(
          ({ firstName, id }) => (
            <ElementOfList
              key={id}
              id={id}
              firstName={firstName}
              handleClick={handleClick}
            />
          ),
        )
      }
    </ul>
  </div>
);

export default ElementsList;
