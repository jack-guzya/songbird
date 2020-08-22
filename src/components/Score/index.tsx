import React from 'react';

export type Score = number

interface ScoreProps {
  score: Score
}

const Score = ({ score }: ScoreProps) => (
  <p className="score__title">
    Score:
    <span className="score__value">
      {score}
    </span>
  </p>
);

export default Score;
