import React from 'react';

// Components
import Avatar from './Avatar';
import BirdName from './BirdName';

// Styles
import './QuestionBlock.scss';

function QuestionBlock() {
  return (
    <div className="question-block">
      <Avatar />
      <BirdName />
    </div>
  );
}

export default QuestionBlock;
