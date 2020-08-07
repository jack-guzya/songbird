// React
import * as React from "react";

// Components
import Header from './Header/Header';
import QuestionBlock from './QuestionBlock/QuestionBlock';

const App:React.FC = () => {
  return (
    <div className="songbird">
      <Header />
      <QuestionBlock />
    </div>
  );
}

export default App;
