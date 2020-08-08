// React
import * as React from 'react';

// Components
import Header from './components/Header/Header';
import QuestionBlock from './components/QuestionBlock/QuestionBlock';
import AnswersList from './containers/AnswersList/AnswersList';
import Description from './containers/Description/Description';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';

const App: React.FC = () => (
  <div className="songbird">
    <Header />
    <QuestionBlock />
    <AnswersList />
    <Description />
    <NextLevelButton />
  </div>
);

export default App;
