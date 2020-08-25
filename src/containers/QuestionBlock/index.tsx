// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import {
  getElementsList, getLevelStatus, getIndexOfQuestion,
} from '../../redux/reducers/level/actions';
// Types
import { IQuestionBlock } from './types';
// Style
import './style.scss';

type TElementsList = ReturnType<typeof getElementsList>

const QuestionBlock: React.FC<IQuestionBlock<TElementsList>> = ({ children }) => {
  const elementsList = useSelector(getElementsList);
  const levelStatus = useSelector(getLevelStatus);
  const indexOfQuestion = useSelector(getIndexOfQuestion);

  return (
    <div className="question-block">
      {
        indexOfQuestion !== null
        && children({ data: elementsList, show: levelStatus, indexOfQuestion })
      }
    </div>
  );
};

export default QuestionBlock;
