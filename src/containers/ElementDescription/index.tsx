// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import { getElementsList, getIndexOfSelect } from '../../redux/level/selectors';
// Types
import { IElementDescription } from './types';
// Style
import './style.scss';

type TElementsList = ReturnType<typeof getElementsList>

const defaultText = (
  <div>
    <h3>Послушайте аудиозапись</h3>
    <p>Выберите один из вариантов ответа</p>
  </div>
);

const ElementDescription: React.FC<IElementDescription<TElementsList>> = ({ children }) => {
  const elementsList = useSelector(getElementsList);
  const indexOfSelection = useSelector(getIndexOfSelect);

  return (
    <>
      {indexOfSelection === null
        ? defaultText
        : children({ data: elementsList, indexOfSelection })}
    </>
  );
};

export default ElementDescription;
