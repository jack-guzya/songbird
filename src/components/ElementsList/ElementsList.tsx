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
          ({ firstName, id }, index) => (
            <ElementOfList
              key={id}
              id={index}
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
