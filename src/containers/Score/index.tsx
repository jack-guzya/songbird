// React
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import ScoreComponent from '../../components/Score';
// Modules
import { selectors } from '../../modules';

const Score: React.FC = () => {
  const score = useSelector(selectors.getScore);

  return (
    <div className="score">
      <ScoreComponent score={score} />
    </div>
  );
};

export default Score;
