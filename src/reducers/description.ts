// Constants
import { SHOW_DESCRIPTION } from '../actions/constants';

// Types
import { CurrentElementType } from '../components/ElementsList/types';
import { ActionType } from '../actions/types';

const DEFAULT_STATE: null = null;

type Action = ActionType & { currentDescription: CurrentElementType }

const currentDescription = (
  state = DEFAULT_STATE, { type, currentDescription }: Action,
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
