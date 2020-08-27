// React / Redux
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as game from './redux/game';
import { updateLevelData } from './redux/level/thunks';
// Components
import TitleBlock from './components/Title';
import ElementName from './components/ElementName';
import ElementText from './components/ElementText';
import ElementImage from './components/ElementImage';
// Containers
import Score from './containers/Score';
import Categories from './containers/CategoryList';
import QuestionBlock from './containers/QuestionBlock';
import ElementsList from './containers/ElementList';
import ElementDescription from './containers/ElementDescription';
import ControlBlock from './containers/ControlBlock';
import AudioPlayer from './components/AudioPlayer';
import ModalBlock from './containers/ModalBlock';

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
    <>
      <header className="container-fluid header">
        <div className="row justify-content-center">
          <div className="col-6 align-self-center">
            <TitleBlock>
              <h1 className="title">
                <span>Song</span>
                <span>Bird</span>
              </h1>
            </TitleBlock>
          </div>
          <div className="col-6 align-self-center">
            <div className="score">
              <Score />
            </div>
          </div>
        </div>
      </header>
      <main className="container main">
        <div className="row categories">
          <div className="col">
            <div
              className="list-group list-group-horizontal-lg"
              id="list-tab"
              role="tablist"
            >
              <Categories />
            </div>
          </div>
        </div>
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
      </main>
    </>
  );
};

export default App;
