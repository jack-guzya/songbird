// React
import React from 'react';
// Types
import { IFinishBtn } from './types';
// Styles
import './FinishBtn.scss';

const FinishBtn: React.FC<IFinishBtn> = ({ onClick }) => (
  <button
    className="finish-btn"
    type="button"
    onClick={onClick}
  >
    Finish
  </button>
);

export default FinishBtn;
