// React
import * as React from 'react';

// Components
// import Header from './components/Header/Header';
import TitleBlock from './components/TitleBlock/TitleBlock';
import QuestionBlock from './components/QuestionBlock/QuestionBlock';

// Containers
import Score from './containers/Score/Score';
import Categories from './containers/Categories/Categories';
import Options from './containers/Options/Options';
import Description from './containers/Description/Description';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';

const App: React.FC = () => (
  <div className="songbird">
    <header className="header">
      <TitleBlock />
      <Score />
      <Categories />
    </header>
    <QuestionBlock />
    <Options />
    <Description />
    <NextLevelButton />
  </div>
);

export default App;
