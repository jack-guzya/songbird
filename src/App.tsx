// React
import React from 'react';
// Components
import TitleBlock from './components/TitleBlock/TitleBlock';
import QuestionBlock from './components/QuestionBlock/QuestionBlock';
// Containers
import Score from './containers/Score/Score';
import Categories from './containers/CategoryList/Categories';
import Options from './containers/ElementList/ElementList';
import Description from './containers/ElementDescription/Description';
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
