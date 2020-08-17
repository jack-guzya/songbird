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
    const { children, question } = this.props;
    return (
      <div className="question-block">
        {question && children(question.data)}
      </div>
    );
  }
}

export default connect(({ question }: any) => ({
  question,
}))(QuestionBlock);
