// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import { getScore } from '../../redux/game/selectors';
// Components
import ScoreComponent from '../../components/Score';
import TitleBlock from '../../components/Title';
// Styles
import './style.scss';

const Score: React.FC = () => {
  const score = useSelector(getScore);

  return (
    <header className="container-fluid sticky-top header">
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
            <ScoreComponent score={score} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Score;
