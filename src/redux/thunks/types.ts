import * as data from '../reducers/data';
import * as game from '../reducers/game';
import * as level from '../reducers/level';
import * as modal from '../reducers/modal';

export type Action = data.types.Action
  | game.types.Action
  | level.types.Action<data.types.IElement>
  | modal.types.Action
