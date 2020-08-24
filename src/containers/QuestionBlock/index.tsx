// React
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Modules
import { getElementsList, getLevelStatus, getIndexOfQuestion } from '../../redux/reducers/level/actions';
// Types
import { IQuestionBlock } from './types';
// Style
import './style.scss';

const QuestionBlock: React.FC<IQuestionBlock> = ({ children }) => {
  const elementsList = useSelector(getElementsList);
  const levelStatus = useSelector(getLevelStatus);
  const indexOfQuestion = useSelector(getIndexOfQuestion);

  console.log(elementsList);
  return (
    <div className="question-block">
      {
        indexOfQuestion !== null
        && children({ ...elementsList[indexOfQuestion], show: levelStatus })
      }
    </div>
  );
};

export default QuestionBlock;
