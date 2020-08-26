// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
// Components
import ScoreComponent from '../../components/Score';
// Modules
import { getScore } from '../../redux/game/actions';

const Score: React.FC = () => {
  const score = useSelector(getScore);

  return (
    <div className="score">
      <ScoreComponent score={score} />
    </div>
  );
};

export default Score;
