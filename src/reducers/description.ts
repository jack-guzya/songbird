// Constants
import { SHOW_DESCRIPTION } from '../actions/constants';

// Types
import { ElementDescriptionType } from '../components/ElementDescription/types';
import { ActionType } from '../actions/types';

const DEFAULT_STATE: null = null;

type Action = ActionType & ElementDescriptionType

const descriptionReducer = (
  state = DEFAULT_STATE, { type, ...description }: Action,
): ElementDescriptionType => {
  switch (type) {
    case SHOW_DESCRIPTION:
      return description;

    default:
      return state;
  }
};

export default descriptionReducer;
