/* eslint-disable indent */
// React
import React from 'react';
// Components
import TitleBlock from './components/TitleBlock/TitleBlock';
import ElementName from './components/ElementName/ElementName';
import ElementText from './components/ElementText/ElementText';
import ElementImage from './components/ElementImage/ElementImage';
// Containers
import Header from './containers/Header/Header';
import Score from './containers/Score/Score';
import Categories from './containers/CategoryList/CategoryList';
import QuestionBlock from './containers/QuestionBlock/QuestionBlock';
import ElementsList from './containers/ElementList/ElementsList';
import ElementDescription from './containers/ElementDescription/ElementDescription';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';

const App: React.FC = () => (
  <div className="songbird">
    <Header>
      {() => (
        <>
          <TitleBlock />
          <Score />
          <Categories />
        </>
      )}
    </Header>
    <QuestionBlock>
      {() => (
        <>
          <ElementImage image="assets/bird-default-img.png" altText="default-img" />
          <ElementName firstName="******" />
          <AudioPlayer />
        </>

      )}
    </QuestionBlock>
    <ElementsList />
    <ElementDescription>
      {({
        firstName, secondName, image, description,
      }) => (
          <>
            <ElementName firstName={firstName} secondName={secondName} />
            <ElementImage image={image} altText={firstName} />
            <ElementText description={description} />
          </>
        )}
    </ElementDescription>
    <NextLevelButton />
  </div>
);

export default App;
