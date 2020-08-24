// // Lodash
// import shuffle from 'lodash.shuffle';
// import random from 'lodash.random';
// // Store
// import store from '../redux/store';
// // Types
// import { Action } from '../modules/types';
// // Actions
// import { actions } from '../modules';

// class DomainModel {
//   protected actions = {
//     ...actions,
//   }

//   getState = () => store.getState()

//   protected sendAction = <T>(action: Action<T>) => store.dispatch(action);

//   protected shuffle = <T>(data: Array<T>) => shuffle(data)

//   protected random = (upper: number = 5) => random(upper)

//   // protected setLevel = (level: number = 0) => {
//   //   const { data } = this.getState();
//   //   const preparedList = this.shuffle(
//   //     data
//   //       .list[level]
//   //       .map((element) => ({ status: null, ...element })),
//   //   );
//   //   const questionId = this.random();

//   //   this.sendAction(this.actions.setElementsList(preparedList));
//   //   this.sendAction(this.actions.setQuestionIndex()
//   //   ));
//   // }
// }

// export default DomainModel;
