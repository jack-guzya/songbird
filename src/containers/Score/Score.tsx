// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import ScoreComponent from '../../components/Score/Score';
// Types
import { Score as ScoreType } from '../../modules/score/types';

interface IScoreProps {
  score: ScoreType,
}

const Score: React.FC<IScoreProps> = ({ score }: IScoreProps) => (
  <ScoreComponent score={score} />
);

export default connect((({ score }: IScoreProps) => ({
  score,
})))(Score);
