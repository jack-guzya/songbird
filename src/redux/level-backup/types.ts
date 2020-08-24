// import { IElementImage } from '../../components/ElementImage';
// import { IElementName } from '../../components/ElementName';
// import { IElementText } from '../../components/ElementText';

// Constants
export const SET_SELECTION_INDEX = 'SET_SELECTION_INDEX';
export const SET_ELEMENTS_LIST = 'SET_ELEMENT_LIST';
export const SET_ELEMENT_STATUS = 'SET_ELEMENT_STATUS';
export const SET_QUESTION_INDEX = 'SET_QUESTION_INDEX';

export type IndexType = number

export type Status = boolean

// export interface ElementStatus {
//   status: Status
//   id: number
// }

export interface IElementOfList {
  firstName?: string
  secondName?: string,
  description?: string,
  image?: string,
  audio?: string
  status?: Status
}

interface IElementsList {
  type: typeof SET_ELEMENTS_LIST
  payload: {
    list: Array<IElementOfList>
  }
}

interface IElementStatus {
  type: typeof SET_ELEMENT_STATUS
  payload: {
    status: Status
    index: number
  }
}

interface IQuestionIndex {
  type: typeof SET_QUESTION_INDEX
  payload: {
    questionIndex: IndexType
  }
}

interface ISelection {
  type: typeof SET_SELECTION_INDEX
  payload: {
    selected: IndexType
  }
}

export type Action = IElementsList | IQuestionIndex | ISelection | IElementStatus

export interface IState {
  list: Array<IElementOfList> | null,
  selected: IndexType
  questionIndex: IndexType
}
