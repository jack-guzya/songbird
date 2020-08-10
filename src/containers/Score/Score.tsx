import React from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import ScoreComponent from '../../components/Score/Score';

type ScoreProps = {
  score: number,
}

const Score = ({ score }: ScoreProps) => (
  <ScoreComponent score={score} />
);

export default connect((({ score }: ScoreProps) => ({
  score,
})))(Score);
