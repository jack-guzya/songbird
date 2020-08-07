// React
import * as React from "react";

// Components
import Header from './Header/Header';
import QuestionBlock from './QuestionBlock/QuestionBlock';
import AnswersList from './AnswersList/AnswersList'

const App:React.FC = () => {
  return (
    <div className="songbird">
      <Header />
      <QuestionBlock />
      <AnswersList/>
    </div>
  );
}

export default App;
