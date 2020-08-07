// React
import * as React from "react";

// Components
import Header from './Header/Header';
import QuestionBlock from './QuestionBlock/QuestionBlock';
import Description from './Description/Description';

const App:React.FC = () => {
  return (
    <div className="songbird">
      <Header />
      <QuestionBlock />
      <Description/>
    </div>
  );
}

export default App;
