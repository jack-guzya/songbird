import React from 'react';

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
