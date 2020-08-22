import { LevelStatus } from '../../modules/levelStatus';
import { GameStatus } from '../../modules/gameStatus';

export interface IControlBlock {
  levelStatus: LevelStatus
  gameStatus: GameStatus
}
