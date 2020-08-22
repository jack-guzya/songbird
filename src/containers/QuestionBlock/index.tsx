// React
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Modules
import { selectors } from '../../modules';
// Types
import { IQuestionBlock } from './types';
// Style
import './style.scss';

const QuestionBlock: React.FC<IQuestionBlock> = ({ children }) => {
  const question = useSelector(selectors.getQuestion);
  const levelStatus = useSelector(selectors.getLevelStatus);

  return (
    <div className="question-block">
      {question && children({ ...question.data, show: levelStatus })}
    </div>
  );
};

export default QuestionBlock;
