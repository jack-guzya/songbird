import React from 'react';

type ScoreProps = {
  score: number,
}

const Score = ({ score }: ScoreProps) => (
  <p className="score__title">
    Score:
    <span className="score__value">{score}</span>
  </p>

);

export default Score;
