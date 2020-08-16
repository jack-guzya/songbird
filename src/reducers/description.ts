// Constants
import { SHOW_DESCRIPTION } from '../actions/constants';

// Types
import { CurrentElementType } from '../containers/ElementList/types';
import { Action } from '../actions/types';

const DEFAULT_STATE: null = null;

const currentDescription = (
  state = DEFAULT_STATE,
  { type, currentDescription }: Action<{ currentDescription: CurrentElementType }>,
): CurrentElementType => {
  switch (type) {
    case SHOW_DESCRIPTION:
      return currentDescription;

    default:
      return state;
  }
};

// type Action = ActionType & ElementDescriptionType

// const descriptionReducer = (
//   state = DEFAULT_STATE, { type, ...description }: Action,
// ): ElementDescriptionType => {
//   switch (type) {
//     case SHOW_DESCRIPTION:
//       return description;

//     default:
//       return state;
//   }
// };

export default currentDescription;
