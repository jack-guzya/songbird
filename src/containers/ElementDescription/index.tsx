// React
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Modules
import { selectors } from '../../modules';
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
  const { selected, list } = useSelector(selectors.getElementsList);

  return (
    <div className="element-description-block">
      {selected === null
        ? renderDefaultText()
        : children(list[selected])}
    </div>
  );
};

export default ElementDescription;
