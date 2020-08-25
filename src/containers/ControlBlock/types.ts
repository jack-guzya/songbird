import { TLevelStatus } from '../../redux/reducers/level/types';
import { TGameStatus } from '../../redux/reducers/game/types';

export interface IControlBlock {
  levelStatus: TLevelStatus
  gameStatus: TGameStatus
}
