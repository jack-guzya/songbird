// Constants
export const SET_DATA = 'SET_DATA';

export interface IElement {
  firstName?: string
  secondName?: string,
  description?: string,
  image?: string,
  id?: number,
  audio?: string
}

export interface IData {
  categories: Array<string>,
  list: Array<Array<IElement>>
}

interface ISetData {
  type: typeof SET_DATA
  payload: IData
}

export type Action = ISetData
