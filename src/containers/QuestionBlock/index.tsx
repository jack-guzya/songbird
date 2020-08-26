// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import * as level from '../../redux/level';
// Types
import { IQuestionBlock } from './types';
// Style
import './style.scss';

type TElementsList = ReturnType<typeof level.actions.getElementsList>

const QuestionBlock: React.FC<IQuestionBlock<TElementsList>> = ({ children }) => {
  const elementsList = useSelector(level.actions.getElementsList);
  const levelStatus = useSelector(level.actions.getLevelStatus);
  const indexOfQuestion = useSelector(level.actions.getIndexOfQuestion);

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
