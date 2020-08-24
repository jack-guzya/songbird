// Constants
export const SWITCH_CATEGORY = 'SWITCH_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export type IndexType = number

export interface ICategories {
  categoryIndex: IndexType
  list: Array<string>
}

interface ISwitchCategory {
  type: typeof SWITCH_CATEGORY
  payload: {
    categoryIndex: IndexType
  }
}

interface ISetCategories {
  type: typeof SET_CATEGORIES
  payload: ICategories
}

export type Action = ISwitchCategory | ISetCategories
