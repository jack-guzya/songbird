// React
import * as React from "react";

// Components
import Header from './Header/Header';
import QuestionBlock from './QuestionBlock/QuestionBlock';
import NextLevelButton from './NextLevelButton/NextLevelButton';

const App:React.FC = () => {
  return (
    <div className="songbird">
      <Header />
      <QuestionBlock />
      <NextLevelButton/>
    </div>
  );
}

export default App;
