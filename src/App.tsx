// React
import React from 'react';
// Services
import Game from './domains/Game';
// Components
import TitleBlock from './components/TitleBlock';
import ElementName from './components/ElementName';
import ElementText from './components/ElementText';
import ElementImage from './components/ElementImage';
// Containers
import Header from './containers/Header';
import Score from './containers/Score';
import Categories from './containers/CategoryList';
import QuestionBlock from './containers/QuestionBlock';
import ElementsList from './containers/ElementList';
import ElementDescription from './containers/ElementDescription';
import ControlBlock from './containers/ControlBlock';
import AudioPlayer from './components/AudioPlayer';
import ModalBlock from './containers/ModalBlock';

class App extends React.Component {
  componentDidMount() {
    const game = new Game();
    game.startGame();
  }

  render() {
    return (
      <div className="songbird">
        <Header>
          <TitleBlock title="SongBird" />
          <Score />
          <Categories />
        </Header>
        <QuestionBlock>
          {(data) => data
            && (
              <>
                <ElementImage image={data.image} altText={data.firstName} show={data.show} />
                <ElementName firstName={data.firstName} show={data.show} />
                <AudioPlayer audio={data.audio} />
              </>
            )}
        </QuestionBlock>
        <ElementsList />
        <ElementDescription>
          {({
            firstName, secondName, image, description, audio,
          }) => (
            <>
              <ElementName firstName={firstName} secondName={secondName} show />
              <ElementImage image={image} altText={firstName} show />
              <AudioPlayer audio={audio} />
              <ElementText description={description} />
            </>
          )}
        </ElementDescription>
        <ControlBlock />
        <ModalBlock />
      </div>
    );
  }
}

export default App;
