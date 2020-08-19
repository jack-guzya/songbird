// React
import React from 'react';
// Types
import { INextLevelBtn } from './types';
// Styles
import './NextLevelBtn.scss';

const NextLevelBtn: React.FC<INextLevelBtn> = ({ disabled, onClick }) => (
  <button
    className="next-level-btn"
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    Next level
  </button>
);

export default NextLevelBtn;
