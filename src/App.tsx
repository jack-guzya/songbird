// React / Redux
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from './redux/thunks/game';
import { getGameStatus } from './redux/reducers/game/actions';
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
        {({ data, indexOfQuestion, show }) => data
          && (
            <>
              <ElementImage
                image={data[indexOfQuestion].image}
                altText={data[indexOfQuestion].firstName}
                show={show}
              />
              <ElementName
                firstName={data[indexOfQuestion].firstName}
                show={show}
              />
              <AudioPlayer audio={data[indexOfQuestion].audio} />
            </>
          )}
      </QuestionBlock>
      <ElementsList />
      <ElementDescription>
        {({ data, indexOfSelection }) => (
          <>
            <ElementName
              firstName={data[indexOfSelection].firstName}
              secondName={data[indexOfSelection].secondName}
              show
            />
            <ElementImage
              image={data[indexOfSelection].image}
              altText={data[indexOfSelection].firstName}
              show
            />
            <AudioPlayer audio={data[indexOfSelection].audio} />
            <ElementText description={data[indexOfSelection].description} />
          </>
        )}
      </ElementDescription>
      <ControlBlock />
      <ModalBlock />
    </div>
  );
};

export default App;
