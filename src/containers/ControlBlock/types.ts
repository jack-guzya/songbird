import { TLevelStatus } from '../../redux/level/types';
import { TGameStatus } from '../../redux/game/types';

export interface IControlBlock {
  levelStatus: TLevelStatus
  gameStatus: TGameStatus
}
