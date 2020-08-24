import { LevelStatus } from '../../redux/levelStatus-backup/types';
import { GameStatus } from '../../redux/gameStatus-backup/types';

export interface IControlBlock {
  levelStatus: LevelStatus
  gameStatus: GameStatus
}
