// React
import * as React from "react";

// Components
import Header from './Header/Header';
import QuestionBlock from './QuestionBlock/QuestionBlock';
import AnswersList from './AnswersList/AnswersList'
import Description from './Description/Description';

const App:React.FC = () => {
  return (
    <div className="songbird">
      <Header />
      <QuestionBlock />
      <AnswersList/>
      <Description/>
    </div>
  );
}

export default App;
