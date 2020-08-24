/* eslint-disable react/prefer-stateless-function */
// React
import React, { useEffect } from 'react';
// // Services
// import Game from './domains/Game';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from './redux/thunks/game';
import { getGameStatus } from './redux/reducers/game/actions';
// import { startGame, setLevel } from './redux/thunks/game';

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

// eslint-disable-next-line arrow-body-style
const App: React.FC = () => {
  const gameStatus = useSelector(getGameStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (gameStatus === null) {
      dispatch(startGame());
    }
  });

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
};

// componentDidMount() {
//   const game = new Game();
//   game.startGame();
// }

export default App;
