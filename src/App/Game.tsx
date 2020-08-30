// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import * as game from '../redux/game';
// Containers
import Header from '../containers/Header';
import Categories from '../containers/CategoryList';
import QuestionBlock from '../containers/QuestionBlock';
import ElementsList from '../containers/ElementList';
import ElementDescription from '../containers/ElementDescription';
import ControlBlock from '../containers/ControlBlock';

const Game: React.FC = () => {
  const gameStatus = useSelector(game.selectors.getGameStatus);

  return gameStatus && (
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
      </main>
    </>
  );
};

export default Game;
