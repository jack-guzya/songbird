// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import ScoreComponent from '../../components/Score/Score';
// Types
import { ScoreType } from '../../components/Score/types';

type ScoreProps = {
  score: ScoreType,
}

const Score = ({ score }: ScoreProps) => (
  <ScoreComponent score={score} />
);

export default connect((({ score }: ScoreProps) => ({
  score,
})))(Score);
