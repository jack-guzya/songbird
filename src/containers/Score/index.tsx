// React
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import ScoreComponent from '../../components/Score';
// Modules
import { getScore } from '../../redux/reducers/game/actions';

const Score: React.FC = () => {
  const score = useSelector(getScore);

  return (
    <div className="score">
      <ScoreComponent score={score} />
    </div>
  );
};

export default Score;
