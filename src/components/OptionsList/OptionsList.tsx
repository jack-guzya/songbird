import React from 'react';

// Components
import Option from './Option/Option';

// Types
// eslint-disable-next-line no-unused-vars
import { elementDescriptionProps } from '../ElementDescription/ElementDescription';

// Style
import './OptionsList.scss';

type optionsListProps = {
  list: Array<elementDescriptionProps>
  handleClick: (e: React.MouseEvent<HTMLLIElement>) => void
}

const OptionsList = ({ list, handleClick }: optionsListProps) => (
  <div className="options-list">
    <ul className="options-list__list">
      {
        list && list.map(
          ({ firstName, id }) => (
            <Option
              key={id}
              data={id}
              name={firstName}
              handleClick={handleClick}
            />
          ),
        )
      }
    </ul>
  </div>
);

export default OptionsList;
