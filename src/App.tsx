/* eslint-disable indent */
// React
import React, { Fragment } from 'react';
// Components
import TitleBlock from './components/TitleBlock/TitleBlock';
import QuestionBlock from './components/QuestionBlock/QuestionBlock';
import ElementName from './components/ElementName/ElementName';
import ElementText from './components/ElementText/ElementText';
import ElementImage from './components/ElementImage/ElementImage';
// Containers
import Score from './containers/Score/Score';
import Categories from './containers/CategoryList/Categories';
import Options from './containers/ElementList/ElementList';
import Description from './containers/ElementDescription/ElementDescription';
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
    <Description>
      {({
        firstName, secondName, image, description,
      }) => (
          <>
            <ElementName firstName={firstName} secondName={secondName} />
            <ElementImage image={image} altText={firstName} />
            <ElementText description={description} />
          </>
        )}
    </Description>
    <NextLevelButton />
  </div>
);

export default App;
