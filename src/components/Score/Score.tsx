/* eslint-disable no-unused-vars */
import React from 'react';
// Types
import { ScoreType } from './types';

type ScoreProps = {
  score: ScoreType
}

const Score = ({ score }: ScoreProps) => (
  <p className="score__title">
    Score:
    <span className="score__value">{score}</span>
  </p>

);

export default Score;
