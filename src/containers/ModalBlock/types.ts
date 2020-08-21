import { Mode } from '../../modules/modal/types';
import { Score } from '../../modules/score/types';

export interface IModalBlock {
  modalMode: Mode
  setModalMode: (mode: Mode) => any
}

export interface IFailFinish {
  score: Score
  maxScore: Score
  onClick: () => void
}
