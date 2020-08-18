/* eslint-disable react/prefer-stateless-function */
// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Types
import { IQuestionBlock } from './types';
// Style
import './QuestionBlock.scss';

class QuestionBlock extends React.Component<IQuestionBlock> {
  render() {
    const { children, question, status } = this.props;
    return (
      <div className="question-block">
        {question && children({ ...question.data, show: status })}
      </div>
    );
  }
}

export default connect(({ question, status }: any) => ({
  question,
  status,
}))(QuestionBlock);
