// React
import * as React from "react";

// Components
import Header from './Header/Header';
import QuestionBlock from './QuestionBlock/QuestionBlock';
import AnswersList from './AnswersList/AnswersList'
import Description from './Description/Description';
import NextLevelButton from './NextLevelButton/NextLevelButton';

const App:React.FC = () => {
  return (
    <div className="songbird">
      <Header />
      <QuestionBlock />
      <AnswersList/>
      <Description/>
      <NextLevelButton/>
    </div>
  );
}

export default App;
