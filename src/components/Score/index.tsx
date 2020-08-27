import React from 'react';
// Style
import './style.scss';

interface IScoreProps {
  score: number
}

const Score = ({ score }: IScoreProps) => (
  <p className="score__title">
    Score:
    <span className="score__value">
      {score}
    </span>
  </p>
);

export default Score;
