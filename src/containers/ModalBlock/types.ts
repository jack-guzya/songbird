import { Mode } from '../../redux/reducers/modal/types';

export interface IModalBlock {
  modalMode: Mode
  setModalMode: (mode: Mode) => any
}

export interface IFailFinish {
  score: number
  maxScore: number
  onClick: () => void
}
