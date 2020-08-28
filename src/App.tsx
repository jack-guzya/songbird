// React / Redux
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as game from './redux/game';
import { updateLevelData } from './redux/level/thunks';
// Containers
import Header from './containers/Header';
import Categories from './containers/CategoryList';
import QuestionBlock from './containers/QuestionBlock';
import ElementsList from './containers/ElementList';
import ElementDescription from './containers/ElementDescription';
import ControlBlock from './containers/ControlBlock';
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
      <Header />
      <main className="container main">
        <Categories />
        <QuestionBlock />
        <div className="row no-gutters">
          <ElementsList />
          <ElementDescription />
        </div>
        <div className="row no-gutters">
          <ControlBlock />
        </div>
        <ModalBlock />
      </main>
    </>
  );
};

export default App;
