// React / Redux
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as game from './redux/game';
import { updateLevelData } from './redux/level/thunks';
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
// Style
import './styles/layout/style.scss';

const App: React.FC = () => {
  const gameStatus = useSelector(game.selectors.getGameStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (gameStatus === null) {
      dispatch(game.thunks.startGame());
      dispatch(updateLevelData());
    }
  });

  return (
    <div className="container">
      <Header>
        <div className="row">
          <div className="col">
            <TitleBlock title="SongBird" />
          </div>
          <div className="col">
            <Score />
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <div className="list-group list-group-horizontal-md">
              <Categories />
            </div>
          </div>
        </div>
      </Header>
      <QuestionBlock>
        {({ data, indexOfQuestion, show }) => data
          && (
            <>
              <div className="row">
                <div className="col-lg-3">
                  <ElementImage
                    image={data[indexOfQuestion].image}
                    altText={data[indexOfQuestion].firstName}
                    show={show}
                  />
                </div>
                <div className="col">
                  <ElementName
                    firstName={data[indexOfQuestion].firstName}
                    show={show}
                  />
                  <AudioPlayer audio={data[indexOfQuestion].audio} />
                </div>
              </div>
            </>
          )}
      </QuestionBlock>
      <div className="row">
        <div className="col-lg-6">
          <ElementsList />
        </div>
        <div className="col">
          <ElementDescription>
            {({ data, indexOfSelection }) => (
              <>
                <div className="row">
                  <div className="col-md-4 align-self-center">
                    <ElementImage
                      image={data[indexOfSelection].image}
                      altText={data[indexOfSelection].firstName}
                      show
                    />
                  </div>
                  <div className="col">
                    <ElementName
                      firstName={data[indexOfSelection].firstName}
                      secondName={data[indexOfSelection].secondName}
                      show
                    />
                    <AudioPlayer audio={data[indexOfSelection].audio} />
                  </div>
                </div>
                <div className="row element-text-block">
                  <ElementText description={data[indexOfSelection].description} />
                </div>
              </>
            )}
          </ElementDescription>
        </div>
      </div>
      <div className="row">
        <ControlBlock />
      </div>
      <ModalBlock />
    </div>
  );
};

export default App;
