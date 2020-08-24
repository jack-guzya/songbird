// React
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
import { getElementsList, getIndexOfSelect } from '../../redux/reducers/level/actions';
// Types
import { IElementDescription } from './types';
// Style
import './style.scss';

const renderDefaultText = () => (
  <div>
    <h3>Послушайте аудиозапись</h3>
    <p>Выберите один из вариантов ответа</p>
  </div>
);

const ElementDescription: React.FC<IElementDescription> = ({ children }) => {
  const elementsList = useSelector(getElementsList);
  const indexOfSelect = useSelector(getIndexOfSelect);

  return (
    <div className="element-description-block">
      {indexOfSelect === null
        ? renderDefaultText()
        : children(elementsList[indexOfSelect])}
    </div>
  );
};

export default ElementDescription;
