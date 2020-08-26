// React / Redux
import React from 'react';
import { useSelector } from 'react-redux';
import { getScore } from '../../redux/game/selectors';
// Components
import ScoreComponent from '../../components/Score';

const Score: React.FC = () => {
  const score = useSelector(getScore);

  return (
    <div className="score">
      <ScoreComponent score={score} />
    </div>
  );
};

export default Score;
