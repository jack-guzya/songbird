/* eslint-disable react/prefer-stateless-function */
// React
import React from 'react';
// Types
import { IQuestionBlock } from './types';
// Style
import './QuestionBlock.scss';

class QuestionBlock extends React.Component<IQuestionBlock> {
  render() {
    const { children } = this.props;
    return (
      <div className="question-block">
        {children()}
      </div>
    );
  }
}

export default QuestionBlock;
