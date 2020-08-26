// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import * as level from '../../redux/level';
// Types
import { IQuestionBlock } from './types';
// Style
import './style.scss';

type TElementsList = ReturnType<typeof level.selectors.getElementsList>

const QuestionBlock: React.FC<IQuestionBlock<TElementsList>> = ({ children }) => {
  const elementsList = useSelector(level.selectors.getElementsList);
  const levelStatus = useSelector(level.selectors.getLevelStatus);
  const indexOfQuestion = useSelector(level.selectors.getIndexOfQuestion);

  return (
    <div className="question-block">
      {
        indexOfQuestion !== null
        && children({ data: elementsList, show: levelStatus === 'success', indexOfQuestion })
      }
    </div>
  );
};

export default QuestionBlock;
