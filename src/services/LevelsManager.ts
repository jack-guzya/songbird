// Lodash
import shuffle from 'lodash.shuffle';
// Store
import store from '../store';
// Actions
import {
  switchCategory,
  setElementsList,
  showDescription,
  setCategories,
  setQuestion,
} from '../actions/actionCreator';

class LevelsManager {
  nextLevel = () => {
    const { categories, data } = store.getState();
    const preparedList = shuffle(data.list[categories.current + 1]);
    store.dispatch(switchCategory(categories.current + 1));
    store.dispatch(showDescription(null));
    store.dispatch(setElementsList(preparedList));
  }

  startGame = () => {
    const { data } = store.getState();
    const preparedList = shuffle(data.list[0]);
    const categories = { current: 0, list: data.categories };
    store.dispatch(setElementsList(preparedList));
    store.dispatch(setCategories(categories));
    store.dispatch(setQuestion({ current: 1, data: preparedList[1] }));
  }

  // setQuestion = () => {

  // }
}

export default LevelsManager;
