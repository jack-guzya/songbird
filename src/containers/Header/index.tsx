// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import { getScore } from '../../redux/game/selectors';
// Components
import ScoreComponent from '../../components/Score';
import TitleBlock from '../../components/Title';
import Menu from './Menu';
// Styles
import './style.scss';

const Header: React.FC = () => {
  const score = useSelector(getScore);

  return (
    <header className="container-fluid sticky-top header">
      <div className="row justify-content-center">
        <div className="col col-sm-6 nav-block">
          <TitleBlock>
            <h1 className="title">
              <span>Song</span>
              <span>Bird</span>
            </h1>
          </TitleBlock>
          <Menu />
        </div>
        <div className="col col-sm-6 align-self-center">
          <div className="score">
            <ScoreComponent score={score} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
