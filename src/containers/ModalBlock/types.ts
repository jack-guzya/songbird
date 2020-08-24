import { Mode } from '../../redux/reducers/modal/types';
import { Score } from '../../components/Score';

export interface IModalBlock {
  modalMode: Mode
  setModalMode: (mode: Mode) => any
}

export interface IFailFinish {
  score: Score
  maxScore: Score
  onClick: () => void
}
